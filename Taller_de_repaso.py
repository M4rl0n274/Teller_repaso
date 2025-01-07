 #*1. Suma de dos números
 #*Crea un programa que solicite dos números al usuario y muestre su suma.
 
# num_1 = int (input ("Ingrese el Primer número a sumar: "))
# num_2 = int (input ("Ingrese el Segundo número a sumar: "))
# print (num_1+num_2) 

#*Par o impar
#*Pide un número al usuario y determina si es par o impar usando if.

# num = int(input("Ingrese un Numero para determiar si es par o impar: "))
# if num %2 == 0:
#     print ("Es par mi socio")
# else:
#     print ("Es impar socio")

#*Mayor de tres números
#*Pide tres números al usuario e imprime cuál es el mayor.

# num_1 = int(input("Ingrese el primer numero que desea comparar: "))
# num_2 = int(input("Ingrese el segundo numero que desea comparar: "))
# num_3 = int(input("Ingrese el tercer numero que desea comparar: "))
# if num_1 > num_2 > num_3:
#     print ("el primer numero",num_1,  "es mayor:")
# elif num_2 > num_3:
#     print ("el segundo numero",num_2,  "es mayor:")
# elif num_3 > num_1:
#     print ("el tercer numero","(",num_3,")",  "es mayor:")   
# else:
#     print ("sea serio!")

#*Tabla de multiplicar
#*Escribe un programa que imprima la tabla de multiplicar del 1 al 10 para un número ingresado por el usuario

# num = int(input("¿Que tabla de multiplicar desea?: "))    
# lista = [0,1,2,3,4,5,6,7,8,9,10]
# contador = 1
# print ( "la tabla que desea es: ")
# for i in lista:
#     print(num,"X",contador,"=",num*contador )
#     contador += 1
    
#*Contar vocales
#*Pide al usuario una palabra y usa un for para contar cuántas vocales tiene

# print ("bienvenido al contador de vocales!") 
# palabra = input("Ingrese la palabra: ")
# contador = 0
# vocales = "aeiouAEIOU"

# for letras in palabra:
#     if letras in vocales:
#         contador += 1
# print("para la palabra: ",palabra,"la cantidad de vocales es",contador)


#* Números del 1 al N
#* Pide al usuario un número N e imprime todos los números del 1 al N usando un while.

# limite= int(input("¿Hasta que número desea contar?: "))
# num = 1
# while num  <= limite:
#     print("Número: ", num)
#     num += 1

#* Factorial
#* Escribe un programa que calcule el factorial de un número usando un for.
    
#! Formula
#& 1! = 1 * 1 = 1
#& 3! = 1 * 2 * 3 = 6
#& 10! = 1 * 2 * 3 … 8 * 9 * 10 = 3.628.800   

# number = int(input("Ingrese el Número del cual desea saber su factorial: "))
# factorial = 1
# for i in range(1 , number + 1):
#     factorial *=i
#     print ("El factorial del número: ",number, "es: ", factorial)

#* Sumar números pares
#*  Usa un for para sumar todos los números pares entre 1 y 100.

# suma = 0 # Variable para acumular la suma
# # Iterar desde 1 hasta 100
# for i in range(1,100):
#    if i  %2 == 0:  # Verificar si el número es par
#        suma += i   # Agregar el número par a la suma
# print("La suma de los números pares entre 1 y 100 es:", suma)

