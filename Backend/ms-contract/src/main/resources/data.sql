/*
INFORMATION
NULL = Not available
-1 = Infinite
*/

/* -------- */
/* CLIENT 1 */
/* -------- */
insert into contract(document, contract_name) 
values('48640904K', 'Pack Standart');

/* LINE 1 */
insert into lineconsumption(id, total_minuts, total_minuts_international, usage_minuts, usage_minuts_international, total_sms, usage_sms) 
values('638538155', -1, 1000, -1, 172, -1, -1);
insert into dataconsumption(id, total_bytes, total_bytes_international, total_bytes_bonus, usage_bytes, usage_bytes_international, usage_bytes_bonus) 
values('638538155', 2147483648, 1073741824, 1073741824, 429496729.6, 429496729.6, 214748364.8);
insert into contractline(phone, contract_id, rate, contract_type, iccid, pin, puk, tecnology, partner_points) 
values('638538155', '48640904K', 'Tarifa Ilimitada + Datos', 'POSPAID', '89 012 60 232714958936F', '1111', '11111111', '4G', 0);
insert into contractservices(id, contract_line_id, name, description, active) 
values(1, '638538155', 'Llamadas Internacionales', 'Servicio que permite realizar llamadas internacionales', 1);
insert into contractservices(id, contract_line_id, name, description, active) 
values(2, '638538155', 'Navegación en Internet', 'Servicio que permite la navegación en internet', 1);
insert into contractservices(id, contract_line_id, name, description, active) 
values(3, '638538155', 'Roaming', 'Servicio que permite la navegación en internet en el extranjero', 0);
insert into contractservices(id, contract_line_id, name, description, active) 
values(4, '638538155', 'SMS', 'Servicio que permite el envío de SMS', 0);

/* LINE 2 */
insert into lineconsumption(id, total_minuts, total_minuts_international, usage_minuts, usage_minuts_international, total_sms, usage_sms) 
values('639733059', 500, 0, 35, 0, 1000, 126);
insert into dataconsumption(id, total_bytes, total_bytes_international, total_bytes_bonus, usage_bytes, usage_bytes_international, usage_bytes_bonus) 
values('639733059', 3221225472, 1073741824, NULL, 462521547.6, 0, NULL);
insert into contractline(phone, contract_id, rate, contract_type, iccid, pin, puk, tecnology, partner_points) 
values('639733059', '48640904K', 'Tarifa 500min + Datos', 'PREPAID', '89 012 60 226314933435A', '1111', '11111111', '4G', 0);
insert into contractservices(id, contract_line_id, name, description, active) 
values(5, '639733059', 'Llamadas Internacionales', 'Servicio que permite realizar llamadas internacionales', 1);
insert into contractservices(id, contract_line_id, name, description, active) 
values(6, '639733059', 'Navegación en Internet', 'Servicio que permite la navegación en internet', 1);
insert into contractservices(id, contract_line_id, name, description, active) 
values(7, '639733059', 'Roaming', 'Servicio que permite la navegación en internet en el extranjero', 0);
insert into contractservices(id, contract_line_id, name, description, active) 
values(8, '639733059', 'SMS', 'Servicio que permite el envío de SMS', 0);

/* LINE 3 */
insert into lineconsumption(id, total_minuts, total_minuts_international, usage_minuts, usage_minuts_international, total_sms, usage_sms) 
values('966343313', -1, -1, -1, -1, -1, -1);
insert into contractline(phone, contract_id, rate, contract_type, iccid, pin, puk, tecnology, partner_points) 
values('966343313', '48640904K', NULL, 'FIXED', NULL, NULL, NULL, 'FIBRA', 0);

/* -------- */
/* CLIENT 2 */
/* -------- */
insert into contract(document, contract_name) 
values('48642036A', 'Pack Standart');

/* LINE 1 */
insert into lineconsumption(id, total_minuts, total_minuts_international, usage_minuts, usage_minuts_international, total_sms, usage_sms) 
values('660444027', 200, 100, 22, 0, 1000, 4);
insert into dataconsumption(id, total_bytes, total_bytes_international, total_bytes_bonus, usage_bytes, usage_bytes_international, usage_bytes_bonus) 
values('660444027', 3221225472, 1073741824, 0, 322122547.2, 0, 0);
insert into contractline(phone, contract_id, rate, contract_type, iccid, pin, puk, tecnology, partner_points) 
values('660444027', '48642036A', 'Tarifa 200min + Datos', 'POSPAID', '89 012 80 352115623323E', '1111', '11111111', '4G', 0);
insert into contractservices(id, contract_line_id, name, description, active) 
values(9, '660444027', 'Llamadas Internacionales', 'Servicio que permite realizar llamadas internacionales', 1);
insert into contractservices(id, contract_line_id, name, description, active) 
values(10, '660444027', 'Navegación en Internet', 'Servicio que permite la navegación en internet', 1);
insert into contractservices(id, contract_line_id, name, description, active) 
values(11, '660444027', 'Roaming', 'Servicio que permite la navegación en internet en el extranjero', 1);
insert into contractservices(id, contract_line_id, name, description, active) 
values(12, '660444027', 'SMS', 'Servicio que permite el envío de SMS', 1);

/* LINE 2 */
insert into lineconsumption(id, total_minuts, total_minuts_international, usage_minuts, usage_minuts_international, total_sms, usage_sms) 
values('966344334', -1, -1, -1, -1, -1, -1);
insert into contractline(phone, contract_id, rate, contract_type, iccid, pin, puk, tecnology, partner_points) 
values('966344334', '48642036A', NULL, 'FIXED', NULL, NULL, NULL, 'ADSL', 0);