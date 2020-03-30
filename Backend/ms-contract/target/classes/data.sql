/* -------- */
/* CLIENT 1 */
/* -------- */
insert into contract(document) 
values('48640904K');

insert into lineconsumption(id, total_minuts, total_minuts_international, usage_minuts, usage_minuts_international, total_sms, usage_sms) 
values('638538155', 1, 1, 1, 1, 1, 1);
insert into dataconsumption(id, total_bytes, total_bytes_international, total_bytes_bonus, usage_bytes, usage_bytes_international) 
values('638538155', 1, 1, 1, 1, 1);
insert into contractline(phone, contract_id, rate, contract_type, iccid, pin, puk, tecnology, partner_points, ) 
values('638538155', '48640904K', 'TARIFA', 'PREPAID', '1', '2', '3', '4', '5');
insert into contractservices(id, contract_line_id, name, description, activation_date, desactivation_date) 
values(1, '638538155', 'Nombre servicio 1', '1', '2019-01-01', '2019-01-01');
insert into contractservices(id, contract_line_id, name, description, activation_date, desactivation_date) 
values(2, '638538155', 'Nombre servicio 2', '2', '2019-01-01', '2019-01-01');

/* LINE 1 */
insert into lineconsumption(id, total_minuts, total_minuts_international, usage_minuts, usage_minuts_international, total_sms, usage_sms) 
values('639850801', 1, 1, 1, 1, 1, 1);
insert into dataconsumption(id, total_bytes, total_bytes_international, total_bytes_bonus, usage_bytes, usage_bytes_international) 
values('639850801', 1, 1, 1, 1, 1);
insert into contractline(phone, contract_id, rate, contract_type, iccid, pin, puk, tecnology, partner_points, ) 
values('639850801', '48640904K', 'TARIFA', 'POSPAID', '1', '2', '3', '4', '5');
insert into contractservices(id, contract_line_id, name, description, activation_date, desactivation_date) 
values(3, '639850801', 'Nombre servicio 1', '1', '2019-01-01', '2019-01-01');
insert into contractservices(id, contract_line_id, name, description, activation_date, desactivation_date) 
values(4, '639850801', 'Nombre servicio 2', '2', '2019-01-01', '2019-01-01');

/* LINE 2 */
insert into lineconsumption(id, total_minuts, total_minuts_international, usage_minuts, usage_minuts_international, total_sms, usage_sms) 
values('966343313', 1, 1, 1, 1, 1, 1);
insert into dataconsumption(id, total_bytes, total_bytes_international, total_bytes_bonus, usage_bytes, usage_bytes_international) 
values('966343313', 1, 1, 1, 1, 1);
insert into contractline(phone, contract_id, rate, contract_type, iccid, pin, puk, tecnology, partner_points, ) 
values('966343313', '48640904K', 'TARIFA', 'POSPAID', '1', '2', '3', '4', '5');
insert into contractservices(id, contract_line_id, name, description, activation_date, desactivation_date) 
values(5, '966343313', 'Nombre servicio 1', '1', '2019-01-01', '2019-01-01');
insert into contractservices(id, contract_line_id, name, description, activation_date, desactivation_date) 
values(6, '966343313', 'Nombre servicio 2', '2', '2019-01-01', '2019-01-01');

/* -------- */
/* CLIENT 2 */
/* -------- */
insert into contract(document) 
values('48642036A');

/* LINE 1 */
insert into lineconsumption(id, total_minuts, total_minuts_international, usage_minuts, usage_minuts_international, total_sms, usage_sms) 
values('660444027', 1, 1, 1, 1, 1, 1);
insert into dataconsumption(id, total_bytes, total_bytes_international, total_bytes_bonus, usage_bytes, usage_bytes_international) 
values('660444027', 1, 1, 1, 1, 1);
insert into contractline(phone, contract_id, rate, contract_type, iccid, pin, puk, tecnology, partner_points, ) 
values('660444027', '48642036A', 'TARIFA', 'PREPAID', '1', '2', '3', '4', '5');
insert into contractservices(id, contract_line_id, name, description, activation_date, desactivation_date) 
values(7, '660444027', 'Nombre servicio 1', '1', '2019-01-01', '2019-01-01');
insert into contractservices(id, contract_line_id, name, description, activation_date, desactivation_date) 
values(8, '660444027', 'Nombre servicio 2', '2', '2019-01-01', '2019-01-01');

/* LINE 2 */
insert into lineconsumption(id, total_minuts, total_minuts_international, usage_minuts, usage_minuts_international, total_sms, usage_sms) 
values('966344334', 1, 1, 1, 1, 1, 1);
insert into dataconsumption(id, total_bytes, total_bytes_international, total_bytes_bonus, usage_bytes, usage_bytes_international) 
values('966344334', 1, 1, 1, 1, 1);
insert into contractline(phone, contract_id, rate, contract_type, iccid, pin, puk, tecnology, partner_points, ) 
values('966344334', '48642036A', 'TARIFA', 'POSPAID', '1', '2', '3', '4', '5');
insert into contractservices(id, contract_line_id, name, description, activation_date, desactivation_date) 
values(9, '966344334', 'Nombre servicio 1', '1', '2019-01-01', '2019-01-01');
insert into contractservices(id, contract_line_id, name, description, activation_date, desactivation_date) 
values(10, '966344334', 'Nombre servicio 2', '2', '2019-01-01', '2019-01-01');