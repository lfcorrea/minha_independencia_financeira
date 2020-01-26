import uuid

enc = "ISO8859-1"
file = open("cardBrands.txt", encoding=enc, mode="r")
lines = file.readlines()

brands = []
count = 0
for line in lines:
  ln = line.strip().split(";")
  id = ln[0].strip()
  description = ln[1].strip()
  brand = { "id": id, "description": description, "logo": ""}
  brands.append(brand)

file.close()

brandsText = str(brands)
brandsText = brandsText.replace("'","\"").replace("{","\n{").replace("}]","}\n]")

filew = open("cardBrands.json", encoding=enc, mode="w")
filew.write(brandsText)
filew.close()