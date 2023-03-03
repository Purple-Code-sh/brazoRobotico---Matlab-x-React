% archivo1.m
x = 1:8; % crear una variable x con un vector de 10 elementos
y = sin(x); % crear una variable y con el seno de x
z = x + y; % crear una variable z con la suma de x e y

jsonx = jsonencode({x});
jsony = jsonencode({y});
jsonz = jsonencode({z});

fid = fopen('datos.js','w'); % abrir un archivo llamado datos.js para escribir
fprintf(fid,'var datosX = %s; \n',jsonx); % escribir la cadena JSON como una variable de JavaScript en el archivo
fprintf(fid,'var datosY = %s; \n',jsony);
fprintf(fid,'var datosZ = %s; \n',jsonz);
fprintf(fid,'\nexport{datosX, datosY, datosZ};');
fclose(fid); % cerrar el archivo