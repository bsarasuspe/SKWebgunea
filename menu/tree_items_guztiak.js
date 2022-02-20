/* --- menu items --- */
var TREE_ITEMS = 
[
	['KLINIKAPP PROIEKTUA', '../main/home_page.htm',
			['Laburpena', '../Proyecto/Memoria/resumen'],			
			['Aurkibide orokorra', '../Proyecto/Memoria/indice'],
			['Aurkezpena', '../Proyecto/Aurkezpena.ppt'],
			['MEMORIA','../Proyecto/Memoria/1_0_memoria.htm',
			 	['Portada', '../Proyecto/Memoria/portada'],
				['Sarrera', '../Proyecto/Memoria/introduccion'],
				['Helburua', '../Proyecto/Memoria/objeto'],
				['Aurrekariak', null,
					['Medikuntzan erabiltzen diren tresnak', '../Proyecto/Memoria/antecedentes1'],
				    ['BPMNren historia', '../Proyecto/Memoria/antecedentes2'],
				    ['Intalio BPMS tresnaren deskribapena', '../Proyecto/Memoria/antecedentes3'],
				    ['Web zerbitzuen azalpena', '../Proyecto/Memoria/antecedentes4'],
				    ['Negozio erregelak eta inferentzi motorrak', '../Proyecto/Memoria/antecedentes5'],
                    	],
				['Oraingo egoera', null,
				    ['Medikuntzako ezagutzaren oraingo egoera', '../Proyecto/Memoria/situacion_actual1'],
				    ['BPMS eta bere aplikagarritasuna', '../Proyecto/Memoria/situacion_actual2'],
                    	],
			  	['Arauak eta Erreferentziak', null,
					 ['Aplikatutako legedia eta araudia', '../Proyecto/Memoria/normas_y_referencias1'],
					 ['Bibliografia', '../Proyecto/Memoria/normas_y_referencias2'],
					 ['Metodoak, Tresnak, Ereduak, Metrikak eta Prototipoak', '../Proyecto/Memoria/normas_y_referencias3'],
					 ['Beste erreferentziak', '../Proyecto/Memoria/normas_y_referencias4'],
	                     ],
				['Definizioak eta Laburudurak', '../Proyecto/Memoria/definiciones'],
				['Hasierako betekizunak', '../Proyecto/Memoria/requisitos_iniciales'],
				['Proiektuaren norainokoa', '../Proyecto/Memoria/alcance'],
				['Hipotesi eta murriztapenak', '../Proyecto/Memoria/hipotesis'],
				['Hautabideak eta Bideragarritasunak', null,
					 ['Hautabideen azterketa', '../Proyecto/Memoria/alternativas1'],
					 ['Bideragarritasun azterketa', '../Proyecto/Memoria/alternativas2']
						],
				['Proposatutako soluzioa', null,
					 ['Sistemaren deskribapena', '../Proyecto/Memoria/solucion1'],
					 ['Betekizun funtzionalak', '../Proyecto/Memoria/solucion2'],
					 ['Ezaugarri ez funtzionalak', '../Proyecto/Memoria/solucion3'],
					 ['Arkitektura orokorra', '../Proyecto/Memoria/solucion4'],
					 ['Sistemaren analisia eta diseinua', '../Proyecto/Memoria/solucion5'],
					 ['Gimex sisteman exekutagarri aurki daitezkeen gida medikuak', '../Proyecto/Memoria/solucion6'],
					 ['Gimex web aplikazioaren interfazea', '../Proyecto/Memoria/solucion7'],
					 ['Soluzioaren abantailak eta desabantailak', '../Proyecto/Memoria/solucion8'],
					 ['Beste lan batzuekiko konparaketa', '../Proyecto/Memoria/solucion9'],
					 ['Ondorioak', '../Proyecto/Memoria/solucion10'],
	                     ],
				['Eraikuntzarako aurreikuspenak', null,
					 ['Arriskuen analisia', '../Proyecto/Memoria/previsiones_construccion1'],
					 ['Proiektuaren kudeaketa eta antolamendua', '../Proyecto/Memoria/previsiones_construccion2'],
					 ['Denborazko planifikazioa', '../Proyecto/Memoria/previsiones_construccion3'],
					 ['Aurrekontua', '../Proyecto/Memoria/previsiones_construccion4'],
	                     ]
    	                     ],
                          
			['MEMORIAREN ERANSKINAK',null,
				['Sarrerako dokumentazioa', '../Proyecto/Memoria-Anexos/1_documentacion-entrada.htm'],
				['Sistemaren espezifikazioa','../Proyecto/Memoria-Anexos/2_especificacion-sistema.htm',
					['Betekizunak', null,
				         	['Glosategia', '../Proyecto/Memoria/1_0_memoria_archivos/rup_glossary.pdf'],
				         	['Ikuspegia', '../Proyecto/Memoria/1_0_memoria_archivos/vision_tpl.pdf'],
							['Betebeharren espezifikazioa', '../Proyecto/Memoria/1_0_memoria_archivos/systemwide_req_spec.pdf'],
							['Erabilpen-Kasuak', null,
								['01. Erregistroa', '../Proyecto/Memoria/1_0_memoria_archivos/usecase_specification_tpl_register.pdf'],
								['02. Login', '../Proyecto/Memoria/1_0_memoria_archivos/usecase_specification_tpl_login.pdf'],
								['03. Zientifikoei rola/baimena eman', '../Proyecto/Memoria/1_0_memoria_archivos/usecase_specification_tpl_zientifiko_rola_eman.pdf'],
								['04. Gida klinikoak sortu', '../Proyecto/Memoria/1_0_memoria_archivos/usecase_specification_tpl_gida_klinikoa_sortu.pdf'],
								['05. Gida klinikoak ikusi', '../Proyecto/Memoria/1_0_memoria_archivos/usecase_specification_tpl_gida_klinikoak_ikusi.pdf'],
								['06. Diagnostikoa lortu', '../Proyecto/Memoria/1_0_memoria_archivos/usecase_specification_tpl_diagnostikoa_lortu.pdf'],
							],
				         	['Inplikatuen eskaerak', '../Proyecto/Memoria-Anexos/Especificacion del sistema/Requisitos/Solicitudes de los interesados.html'],
				         	['Azalpen gehigarriak', '../Proyecto/Memoria-Anexos/Especificacion del sistema/Requisitos/Especificaciones suplementarias.html'],
				         	['Erabilpen kasuen eredua', '../Proyecto/Memoria-Anexos/Especificacion del sistema/Requisitos/Modelo de casos de uso.htm'],
				         	                                        ]
				],
				['Sistemaren analisia eta diseinua', '../Proyecto/Memoria-Anexos/4_analisis-diseno.htm',
				         ['Softwarearen arkitekturaren dokumentazioa', '../Proyecto/Memoria-Anexos/Analisis y diseno del sistema/Documento de arquitectura de software.html'],
				         ['Analisi eredua', '../Proyecto/Memoria-Anexos/Analisis y diseno del sistema/Modelo de analisis.html'],
				         ['Erabiltzaileen interfazearen prototipoa', '../Proyecto/Memoria-Anexos/Analisis y diseno del sistema/Prototipo de interfaz de usuario.html'],
				         ['Diseinu eredua ', '../Proyecto/Memoria-Anexos/Analisis y diseno del sistema/Modelo de diseno.html'],
				         ['Ezarpen eredua', '../Proyecto/Memoria-Anexos/Analisis y diseno del sistema/Modelo de despliegue.html']
                                ],
				['Besteen azterketak',null,
					['Orokortasunak ', '../Proyecto/Memoria-Anexos/Estudios de terceros/Generalidades.html'],
					['Edukia ', '../Proyecto/Memoria-Anexos/Estudios de terceros/Contenido.html']
				],
				['Implementazioa ', '../Proyecto/Memoria-Anexos/5_implementacion.htm',
					['Garatzailearen ingurunea', '../Proyecto/Memoria-Anexos/Implementacion/Desarrollador/desarrollador.html',
					 	['Instalazio eta konfigurazio gida', '../Proyecto/Memoria-Anexos/Implementacion/Desarrollador/Instalaci�n-Configuraci�n.html'],
						['Gida medikuak ', '../Proyecto/Memoria-Anexos/Implementacion/Desarrollador/Guias medicas/guias.html',
						 	['Gu�a del asma -- Asma', '../Proyecto/Memoria-Anexos/Implementacion/Desarrollador/Guias medicas/asma.html'],
						 	['Gu�a del asma -- Asma Mairi', '../Proyecto/Memoria-Anexos/Implementacion/Desarrollador/Guias medicas/asmaMairi.html'],
							['Gu�a de la glut�rica -- Glut�rica', '../Proyecto/Memoria-Anexos/Implementacion/Desarrollador/Guias medicas/glutarica.html'],
						 	['Gu�a de la glut�rica -- Glut�rica WSDL', '../Proyecto/Memoria-Anexos/Implementacion/Desarrollador/Guias medicas/glutaricaWSDL.html']
						 		],
						],
					['Web Aplikazioa ', '../Proyecto/Memoria-Anexos/Implementacion/Aplicacion Web/aplicacionweb.html',
						['Erabiltzaileen kudeaketa', null,
						 	['Kodea','../Proyecto/Memoria-Anexos/Implementacion/Aplicacion Web/Gestion de usuarios/gestionusuarios.html']
                        		],
							],
					['Mairi Web Zerbitzua', '../Proyecto/Memoria-Anexos/Implementacion/Mairi Servicio Web/mairi.html',
				    	['Dokumentazioa', '../Proyecto/Memoria-Anexos/Implementacion/Mairi Servicio Web/documentacion.html'],
				    	['Kodea', '../Proyecto/Memoria-Anexos/Implementacion/Mairi Servicio Web/codigo.html'],
                    		],
					['Eskuliburuak', '../Proyecto/Memoria-Anexos/Implementacion/Manuales de uso/manual.html',
					 	['Garatzailearen eskulibura.','../Proyecto/Memoria-Anexos/Implementacion/Manuales de uso/Desarrollo de procesos.html' ],
						['Erabiltzailearen eskuliburua','../Proyecto/Memoria-Anexos/Implementacion/Manuales de uso/Uso de la aplicacion.htm' ],
							],
                   		],
				['Frogak ', null,
				         ['Frogen master plana', '../Proyecto/Memoria-Anexos/Pruebas/Master plan de pruebas.html'],
				        	],
				['Aurrekontua ',null,
					['Denborazko planifikazioa', '../Proyecto/Memoria-Anexos/Presupuesto/Planificacion temporal.html'],
					['Orokortasunak ', '../Proyecto/Memoria-Anexos/Presupuesto/Generalidades.html'],
					['Edukia ', '../Proyecto/Memoria-Anexos/Presupuesto/Contenido.html']
						]
					],
				],                         

			['PROIEKTUAREN BARNE ELABORAZIOA',null,
				['ELABORAZIOAREN MEMORIA', '../Proyecto/Memoria-Elaboracion/Memoria/elaborazioaren_memoria.htm',
					 ['Sarrera', '../Proyecto/Memoria-Elaboracion/Memoria/introduccion'],
					 ['RUP bidezko garapena', null,
					 	['Barne aurrekontuak', '../Proyecto/Memoria-Elaboracion/Memoria/desarrollo1'],
					 	['Proiektuaren kudeaketa', '../Proyecto/Memoria-Elaboracion/Memoria/desarrollo2'],
							],
			   			],			 
        		['ERANSKINAK', null,
					 ['Negozio kasua', '../Proyecto/Memoria-Elaboracion/Gestion del proyecto/Caso de negocio.html'],
					 ['Arriskuen lista', '../Proyecto/Memoria-Elaboracion/Gestion del proyecto/Lista de riesgos.html'],
					 ['Softwarearen garapen plana', '../Proyecto/Memoria-Elaboracion/Gestion del proyecto/Plan de desarrollo de software.html'],
					 ['Iterazio planak', '../Proyecto/Memoria-Elaboracion/Gestion del proyecto/Planes de iteracion.html'],
					 ['Metodo eta baliabideak', null,
					 	['Proiektuko kideak', '../Proyecto/Memoria-Elaboracion/Metodos y recursos/Miembros del proyecto.html'],
						['Wikia', '../Proyecto/Memoria-Elaboracion/1_wiki.html'],
						['Bilera aktak', '../Proyecto/Memoria-Elaboracion/Metodos y recursos/Actas de reunion.html'],					
						['Orduen kontrola', '../Proyecto/Memoria-Elaboracion/2_control-horario.html'],		
							],
					['Aurrekontua ',null,
						['Orokortasunak ', '../Proyecto/Memoria-Elaboracion/Presupuesto/Generalidades.html'],
						['Edukia', '../Proyecto/Memoria-Elaboracion/Presupuesto/Contenido.html']
							]
            			],
			   		],
				
			['RUP - TXANTILOIAK','../RUP_templates/RUP_templates.html'],
			
			];