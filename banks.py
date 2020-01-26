import uuid

enc = "ISO8859-1"
file = open("banks.txt", encoding=enc, mode="r")
lines = file.readlines()

banks = []
count = 0
for line in lines:
  ln = line.strip().split(";")
  id = ln[0].strip()
  code = ln[1].strip()
  description = ln[2].strip()
  bank = { "id": id, "code": str(code), "description": description, "logo": ""}
  banks.append(bank)

file.close()

banksText = str(banks)
banksText = banksText.replace("'","\"").replace("{","\n{").replace("}]","}\n]")

filew = open("banks.json", encoding=enc, mode="w")
filew.write(banksText)
filew.close()