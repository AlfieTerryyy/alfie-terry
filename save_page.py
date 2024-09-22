import requests

def save_page(url):
    save_url = 'https://web.archive.org/save/' + url
    response = requests.get(save_url)
    if response.status_code == 200:
        print(f"Page saved successfully: {url}")
    else:
        print(f"Failed to save page: {url}")

if __name__ == "__main__":
    save_page('https://alfieterry.co.uk')
