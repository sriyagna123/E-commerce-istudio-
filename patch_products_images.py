import json
from pathlib import Path

path = Path('data/products.json')
with path.open('r', encoding='utf-8') as f:
    data = json.load(f)

for product in data['products']:
    if product['image'].endswith('.svg'):
        product['image'] = product['image'][:-4] + '.png'

with path.open('w', encoding='utf-8') as f:
    json.dump(data, f, indent=2)

print('Updated product image paths to PNG.')