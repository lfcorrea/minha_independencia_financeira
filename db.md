# users
1. id
2. id_system_accounts
3. name
4. avatar
5. avatar_color
6. is_default

# system_accounts
1. id
2. login
3. password
4. user_id

# credit_cards
1. id
2. id_credit_card_brand
3. description
4. closing_day
5. pay_day

# credit_card_brands
1. id
2. name
3. logo

# banks
1. id
2. name
3. number
4. logo

# account_types
1. id
2. description

# accounts
1. id
2. description
3. id_account_type
4. logo
5. logo_color

# section_types
1. id
2. description
3. order

# section
1. id
2. id_section_type
3. id_parent
4. description
5. rank
6. meaning
7. order
8. id_system_account

# section_entry
1. id
2. date
3. value
4. id_section
5. payment_type
6. id_user
7. installments
