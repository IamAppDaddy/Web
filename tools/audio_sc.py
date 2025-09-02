import requests
from bs4 import BeautifulSoup
import os
import time
import random
import logging
import sys
import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[logging.StreamHandler(sys.stdout)]
)
logger = logging.getLogger()

# Configuration
BASE_URL = "https://pixabay.com/sound-effects/search/game/"
DOWNLOAD_DIR = "game_sound_effects"
USER_AGENTS = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0"
]
HEADERS = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Referer": "https://pixabay.com/",
    "DNT": "1",
    "Connection": "keep-alive"
}

# Create download directory
if not os.path.exists(DOWNLOAD_DIR):
    logger.info(f"Creating download directory: {DOWNLOAD_DIR}")
    os.makedirs(DOWNLOAD_DIR)

def setup_selenium():
    """Set up undetected Chrome browser."""
    options = uc.ChromeOptions()
    options.add_argument("--headless")  # Comment out for visible browser
    options.add_argument(f"user-agent={random.choice(USER_AGENTS)}")
    options.add_argument("--disable-blink-features=AutomationControlled")
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    driver = uc.Chrome(options=options)
    logger.info("Undetected ChromeDriver initialized")
    return driver

def extract_mp3_from_search_page(driver, page_url):
    """Extract MP3 URLs by interacting with play buttons on a search page."""
    logger.info(f"Fetching search page: {page_url}")
    driver.get(page_url)
    time.sleep(random.uniform(3, 5))  # Wait for load and potential anti-bot checks

    mp3_data = []  # List of (title, mp3_url)
    try:
        # Wait for rows to load
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, "audioRow--nAm4Z"))
        )
        rows = driver.find_elements(By.CLASS_NAME, "audioRow--nAm4Z")
        logger.info(f"Found {len(rows)} sound effect rows on page")

        for i, row in enumerate(rows, 1):
            try:
                # Find and click play button
                play_button = row.find_element(By.CSS_SELECTOR, "button[class*='playOverlay']")
                play_button.click()
                logger.info(f"Clicked play button for row {i}")

                # Wait for <audio> to load
                WebDriverWait(row, 5).until(
                    EC.presence_of_element_located((By.TAG_NAME, "audio"))
                )
                audio = row.find_element(By.TAG_NAME, "audio")
                source = audio.find_element(By.CSS_SELECTOR, "source[type='audio/mpeg']")
                mp3_url = source.get_attribute("src")
                logger.debug(f"Found MP3 URL: {mp3_url}")

                # Extract title
                title_elem = row.find_element(By.CSS_SELECTOR, "a[class*='link--']")
                title = title_elem.text.strip() if title_elem.text else f"sound_{i}"
                logger.info(f"Extracted title: {title}")

                mp3_data.append((title, mp3_url))
            except (TimeoutException, NoSuchElementException) as e:
                logger.warning(f"Failed to load MP3 for row {i}: {e}")
            time.sleep(random.uniform(1, 3))  # Delay between clicks
    except TimeoutException:
        logger.warning("No sound rows found on page, possibly end of results or block")
    return mp3_data

def download_mp3(mp3_url, title):
    """Download MP3 with sanitized filename."""
    logger.info(f"Downloading: {mp3_url}")
    try:
        headers = HEADERS.copy()
        headers["User-Agent"] = random.choice(USER_AGENTS)
        safe_title = "".join(c for c in title if c.isalnum() or c in " -_").strip() or mp3_url.split("/")[-1].replace(".mp3", "")
        file_path = os.path.join(DOWNLOAD_DIR, f"{safe_title}.mp3")

        if os.path.exists(file_path):
            logger.info(f"Skipping {file_path} (already exists)")
            return

        response = requests.get(mp3_url, headers=headers, stream=True)
        response.raise_for_status()
        with open(file_path, "wb") as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        logger.info(f"Downloaded: {file_path}")
    except Exception as e:
        logger.error(f"Error downloading {mp3_url}: {e}")

def main():
    logger.info("Starting script")
    driver = setup_selenium()
    all_mp3_data = []
    page = 1
    try:
        while True:
            page_url = BASE_URL if page == 1 else f"{BASE_URL}?pagi={page}"
            mp3_data = extract_mp3_from_search_page(driver, page_url)
            if not mp3_data:
                logger.info("No more results, stopping")
                break
            all_mp3_data.extend(mp3_data)
            page += 1
            time.sleep(random.uniform(5, 8))  # Delay between pages
    finally:
        driver.quit()
        logger.info("Selenium driver closed")

    logger.info(f"Found {len(all_mp3_data)} sound effects")
    for title, mp3_url in all_mp3_data:
        download_mp3(mp3_url, title)

if __name__ == "__main__":
    main()
