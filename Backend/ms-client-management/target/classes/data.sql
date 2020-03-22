insert into address(id, type, direction, number, stairs, floor, door, location, province, postal_code, country) 
values(1, 'Address 1', '', '', '', '', '', '', '', '', '');

insert into address(id, type, direction, number, stairs, floor, door, location, province, postal_code, country) 
values(2, 'Address 2', '', '', '', '', '', '', '', '', '');

insert into billing(id, country_code, control_digit, entity, office, dc, account, address) 
values(1, 'Billing 1', '', '', '', '', '', 2);

insert into client(document, document_type, client_type, name, first_surname, second_surname, birth_date, email, online_invoice, due, limit_due, blacklist, address, billing) 
values('48639170N', 'NIF', 'RESIDENCIAL', '', '', '', '', '', 1, 1, 1, 1, 1, 1);