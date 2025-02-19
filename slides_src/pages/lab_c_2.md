---
title: Lab 2 - Basic C Programming Language
transition: none
---

# Lab 2 - Basic C Programming Language
---
layout: two-cols
---
# String

- String จะต้องอยู่ใน "double quotes"
- โดยภาษา C จะเพิ่มอักขระพิเศษ นั่นก็คือ `\0` ต่อท้าย String นั่นก็คือ String terminator
- มีหลายชื่อเรียกเช่น
    - Null zero
    - Binary zero
    - String terminator
    - ASCII 0
    - \0
- ตัวโปรแกรมเมอร์เอง ไม่ต้องใส่ `\0` หรือ String terminator ลงใน "double quotes" เพราะจะถูกใส่เองโดยอัตโนมัติ
- ภาษา C ต้องใส่ `\0` ปิดท้าย เพื่อให้รู้ว่า String ที่ถูกเก็บใน memory มันจบลงที่ตรงไหน

::right::


<div class="">

<div class="text-center my-3">crazy มีขนาด 6 bytes โดยมี \0<br/> เป็น String terminator</div>
<div class="flex border divide-x w-fit justify-center items-center text-center mx-auto">
    <div class="size-8">c</div>
    <div class="size-8">r</div>
    <div class="size-8">a</div>
    <div class="size-8">z</div>
    <div class="size-8">y</div>
    <div class="size-8">\0</div>
</div>
<div class="text-center text-2xl font-bold">Memory</div>
</div>

---
layout: two-cols
---

# String

- ตัว `\0` จะไม่เท่ากับ `'0'` โดยถ้าดูที่ ASCII Table ตัวแรกคือ `NULL` ซึ่งมีค่าเป็น `0` แต่ `'0'` มีค่าเป็น `48` 

::right::

<div class="bg-white">

![ASCII table](/images/lab3/ASCII-Table-wide.svg)
</div>

---

# ขนาดของ String

- แล้วขนาดของ String จะมีเท่าไร?

- โดยขนาดของ String จะรวมทุกตัวอักษรและอักขระว่าง แต่ไม่รวม null zero หรือ String terminator

ตัวอย่าง 
- Wednesday
- August 10
- I am here

จะเห็นได้ว่า String จะมีขนาด 9 ตัวอักษร 

---

# Character Arrays: Lists of Characters

- การประกาศ Array ใน C จะต้องมีเครื่องหมาย `[` และ `]` ต่อท้ายชื่อตัวแปร โดยต้องระบุขนาดของตัวอักษรที่จะเก็บไปใน `[]`

ตัวอย่าง

```c
char month[10];
```

- ทำไมต้อง 10 ตัว ถึงแม้ว่าชื่อเดือนที่ยาวที่สุดคือ September นั่นก็คือ 9 ตัวอักษร แต่ก็ต้องรวม `\0` หรือ null zero ไปด้วย 
- จริงๆ ควรจะเผื่อจำนวนตัวอักษรที่จะใช้ให้มากหน่อย แต่อย่าให้ขาด

```c
char month[10] = "January"; // ประกาศค่าเริ่มต้น
```

<div class="flex flex-col mt-3 mx-auto w-fit">

<div class="flex gap-3">

<div>
month
</div>

<div class="flex flex-col">
    <div class="flex text-center">
        <div class="size-8">[0]</div>
        <div class="size-8">[1]</div>
        <div class="size-8">[2]</div>
        <div class="size-8">[3]</div>
        <div class="size-8">[4]</div>
        <div class="size-8">[5]</div>
        <div class="size-8">[6]</div>
        <div class="size-8">[7]</div>
        <div class="size-8">[8]</div>
        <div class="size-8">[9]</div>
    </div>
    <div class="flex border divide-x text-center">
        <div class="size-8">J</div>
        <div class="size-8">a</div>
        <div class="size-8">n</div>
        <div class="size-8">u</div>
        <div class="size-8">a</div>
        <div class="size-8">r</div>
        <div class="size-8">y</div>
        <div class="size-8">\0</div>
        <div class="size-8">?</div>
        <div class="size-8">?</div>
    </div>

</div>
</div>

</div>


---

# ถ้าเราเปลี่ยน month จาก January ไปเป็น March


````md magic-move {lines:true}

```c
char month[10] = "January";
month[0] = 'M';
month[1] = 'a';
month[2] = 'r';
month[3] = 'c';
month[4] = 'h';
```

```bash 
Marchry
```

```c
char month[10] = "January";
month[0] = 'M';
month[1] = 'a';
month[2] = 'r';
month[3] = 'c';
month[4] = 'h';
month[5] = '\0'; // You must add this

```

```bash
March
```

````

<v-click at="3">

- ต้องเพิ่ม `\0`
</v-click>

---

# การประกาศค่าเริ่มต้นให้กับ String

- อันนี้จะได้ผลลัพธ์ที่เหมือนกัน

```c
char month[8] = "January";
char month[] = "January"

```

- แต่การที่ตั้งค่าขนาดของ Array แค่ 8 ตัว แล้วในอนาคตจะใช้เก็บ String ที่ยาวขึ้นจะทำไม่ได้ ก็ควรจะตั้งเผื่อไปเลย

```c
char month[25] = "January";
```

- อันนี้ไม่อนุญาติ จะ Error ตอนคอมไพล์

```c
char month[];
month = "April";
```

---

# ถ้าต้องการเปลี่ยนค่าตัวแปร String จะทำยังไง?


- ทำแบบนี้❓

<v-click at="2">

- คำตอบคือ `strcpy`
- แล้ว `strcpy` จะใส่ `\0` ต่อท้าย string ตัวใหม่ให้อัตโนมัติ
</v-click>

````md magic-move
```c
char month[] = "January";
month = "April";
```

```c
#include <stdio.h>
int main(){

    char month[] = "January";
    strcpy(month, "April");
    return 0;
}

```

```c
#include <stdio.h>
#include <string.h>
int main(){

    char month[] = "January";
    strcpy(month, "April");
    printf("%s", month)
    return 0;
}

```


````


---
layout: two-cols
---

# Lab ให้พิมพ์และแก้ไข code 
- ทำใน [https://onlinegdb.com](https://onlinegdb.com)
```c
/**
  Example of strings in C Programming Language
 */

 #include <stdio.h>
 int main(){
    char Kid1[12];
    // Kid1 can hold an 11-character name
    // Kid2 will be 7 characters (Maddie plus null 0)
    char Kid2[] = "Maddie";
    // Kid3 is also 7 characters, but specifically defined
    char Kid3[7] = "Andrew";
    // Hero1 will be 7 characters (adding null 0!)
    char Hero1 = "Batman";
    // Hero2 will have extra room just in case
    char Hero2[34] = "Spiderman";
    char Hero3[25];





```

::right::

# &nbsp;

<div>

```c
    Kid1[0] = 'K'; // Kid1 is being defined 
    Kid1[1] = 'a'; // character-by-character
    Kid1[2] = 't'; // Not efficient, but it does work
    Kid1[3] = 'i';
    Kid1[4] = 'e';
    Kid1[5] = '\0'; // Never forget the null 0 so C 
                    // knows when the string ends

    strcpy(Hero3, "The Incredible Hulk");

    printf("%s\'s favorite hero is %s.\n", Kid1, Hero1);
    printf("%s\'s favorite hero is %s.\n", Kid2, Hero2);
    printf("%s\'s favorite hero is %s.\n", Kid3, Hero3);
    return 0;
}
```
</div>


---
layout: two-cols
---

# Preprocessor Directive

<div class="border border-yellow-500 p-2 w-fit"> ⚠ ทุกโปรแกรมต้องมี </div>

- ใช้เรียกไฟล์ที่โปรแกรมใช้ในการทำงานร่วมกัน
- ใช้กำหนดเงื่อนไขในการคอมไพล์ให้กับโปรแกรม
- Preprocessor Directives พื้นฐานทั่วไปที่นิยมใช้
    - <div class="text-red-500 inline"> #include </div> - ใช้สำหรับเรียกไฟล์ที่โปรแกรมใช้ในการทำงาน

::right::

- #define
- #undef
- #if
- #ifdef
- #ifndef
- #else
- #elif
- #endif
- #line 
- #error
- #pragma


---

# การใช้ #include

- วิธีการใช้งาน

```c 
#include <ชื่อไฟล์>  // จะเรียกไฟล์ใน directory ที่กำหนดโดยตัวคอมไพล์เลอร์
// OR
#include "ชื่อไฟล์" // จะเรียกไฟล์ใน directory ทีทำงานอยู่ในปัจจุบัน
```

- ตัวอย่าง

```c
#include <stdio.h>  // (เป็นการเรียกใช้ไฟล์ stdio.h เข้ามาในโปรแกรม)

#include "mypro.h" // (เป็นการเรียกใช้ไฟล์ mypro.h เข้ามาในโปรแกรม)

```

---

# ตัวอย่าง

- ทำใน [https://onlinegdb.com](https://onlinegdb.com)

```c
// addr.h
printf("\n6104 E. Oak\n");
printf("St. Paul, MN\n");
printf("       54245\n");
```

- แยกไฟล์ addr.h ออกมาโดยการกดสร้างไฟล์ใหม่ (จะมีปุ่ม <bi-file-earmark /> New File) ด้านบน 


```c
// main.c
#include <stdio.h>

int main()
{
    int age = 31;
    printf("I am %d years old", age);
    #include "addr.h"
    printf("That's my address");
    return 0;
}

```

---

- **OUTPUT**

```
I am 31 years old
6104 E. Oak
St. Paul, MN
       54245
That's my address
```

- จุดประสงค์การสร้าง Header file เพื่อแยก code ที่เราจะใช้บ่อยๆ ออกมา แล้วไป include ในไฟล์ที่จะใช้ได้

---
layout: two-cols
---

# ตัวอย่าง 2

- ทำใน [https://onlinegdb.com](https://onlinegdb.com)

```c
// letters.h

"A"
"B"
"C"
"D"
"E"
"F"
```

- แยกไฟล์ letters.h ออกมาโดยการกดสร้างไฟล์ใหม่ (จะมีปุ่ม <bi-file-earmark /> New File) ด้านบน 

::right::

```c
// main.c
#include <stdio.h>
int main(){
    char letters[] = { 
        #include "letters.h"
    };
    char letters2[] = {
        "A"
        "B"
        "C"
        "D"
        "E"
        "F"
    };
    char letters3[] = {"ABCDEF"};

    printf("%s", letters);
    printf("%s", letters2);
    printf("%s", letters3);

    return 0;
}
```

- **OUTPUT**

```
ABCDEFABCDEFABCDEF
```

---

# การใช้ Constants

- `#define` เป็นการสร้างค่าคงที่ หรือ Constants ที่จะไม่มีการเปลี่ยนค่าเมื่อประกาศไปแล้ว 
- Constants ไม่ถือว่าเป็นตัวแปร
- Constants จะต้องตั้งชื่อด้วยตัวพิมพ์ใหญ่

ตัวอย่าง

```c

#define AGELIMIT 21
#define MYNAME "Krit Chomaitong"
#define PI 3.14159
```

- เวลาเราเขียน Code

```c

if(employeeAge < AGELIMIT)

```

- Compiler จะเปลี่ยนเป็นแบบนี้ให้

```c

if(employeeAge < 21)

```

---
layout: two-cols
---

# ตัวอย่าง 3

- ทำใน [https://onlinegdb.com](https://onlinegdb.com)

```c
// constants.h

#define KIDS 3
#define FAMILY "The Peytons"
#define MORTGAGE_RATE 5.15

```

- แยกไฟล์ constants.h ออกมาโดยการกดสร้างไฟล์ใหม่ (จะมีปุ่ม <bi-file-earmark /> New File) ด้านบน 

```c

// main.c
#include <stdio.h>
#include <string.h>
#include "constants.h"

int main(){

    int age;
    char childname[14] = "Thomas";

    printf("\n%s have %d kids.\n", FAMILY, KIDS);



```

::right::

# &nbsp;

```c


    age = 11;
    printf("The oldest, %s, is %d.\n", childname,age);

    strcpy(childname, "Christopher");
    age = 6;
    printf("The middle boy, %s, is %d.\n", childname,age);

    age = 3;
    strcpy(childname, "Benjamin");
    printf("The youngest, %s, is %d.\n", childname,age);
    return 0;
}
```

- **OUTPUT**

```

The Peytons have 3 kids.
The oldest, Thomas, is 11.
The middle boy, Christopher, is 6.
The youngest, Benjamin, is 3.

```

---

# การใช้ scanf

- `scanf` คือการรับค่าจาก keyboard
- การใช้ `scanf` จะใกล้เคียงกับ `printf` เช่นสามารถใช้ control string อย่าง `\n, \a, \t` สำหรับการแสดงข้อความออกมาทางหน้าจอ แต่ห้ามใช้ป้อนจาก keyboard เพราะทำให้ scanf ทำงานผิดพลาด

---

# ตัวอย่าง

```c
#include<stdio.h>
int main(){

    char firstInitial;
    char lastInitial;
    int age;
    int favorite_number;

    printf("What letter does your first name begin with?\n");
    scanf(" %c", &firstInitial);
    
    printf("What letter does your last name begin with?\n");
    scanf(" %c", &lastInitial);
    
    printf("How old are you?\n");
    scanf(" %d", &age);
    
    printf("What is your favorite number (integer only)?\n");
    scanf(" %d", &favorite_number);

    printf("\nYour initials are %c.%c. and you are %d years old", firstInitial, lastInitial, age);
    printf("\nYour favorite number is %d.\n\n", favorite_number);
    return 0;
}
```

---

# คำถาม ❓

1. จาก code ก่อนหน้าถ้าป้อนตัวอักษร มากกว่า 1 ตัว ให้กับ scanf ที่รับเฉพาะ %c จะเกิดอะไรขึ้น?

<v-click>

- คำตอบคือ ทำให้ scanf ทำงานผิดพลาดแล้วมีผลต่อ scanf ในคำสั่งถัดไปด้วย

```
What letter does your first name begin with?
Kr
What letter does your last name begin with?
How old are you?
Ch
What is your favorite number (integer only)?

Your initials are K.r. and you are 1428259984 years old
Your favorite number is 32765.


```
</v-click>

---

# คำถาม ❓

2. ถ้าไม่ใส่ `&` หน้าตัวแปร ใน scanf จะเกิดอะไรขึ้น 

<v-click>

- คำตอบคือ โปรแกรมไม่รับค่าไปเก็บไว้ในตัวแปร แต่ถ้าตัวแปรเป็น string เช่น `char fullNames[20]` จะไม่ต้องใส่ `&` เพราะ scanf จะรับค่าไปใส่ตัวแปร ผ่าน pointer
</v-click>

---

- ตัว scanf จะอ่าน string และจะหยุดถ้าเจออักขระว่าง นั่นก็คือถ้าป้อนมากกว่า 1 คำ จะได้แค่คำแรกคำเดียว และถ้ามี scanf ในคำสั่งถัดไปโปรแกรมก็จะทำงานผิดพลาดทันที

```c

printf("What's your name\n");
scanf(" %s", fullName);

printf("What letter does your first name begin with?\n");
scanf(" %c", &firstInitial);

```

- **OUTPUT**

```
What's your name
Krit Chomaitong
What letter does your first name begin with?
What letter does your last name begin with?
How old are you?
What is your favorite number (integer only)?

Your initials are C.h. and you are 0 years old
Your favorite number is 0.
```

---

# จะเกิดอะไรขึ้นถ้าไม่ใส่ $ ตอนโปรแกรมให้ป้อนราคา❓

```c
#include<stdio.h>

int main(){
    char topping[24];
    int slices;
    int month, day, year;
    float cost;

    // The first scanf will look for a floating-point variable, the cost of a pizza If the user doesn't enter 
    // a $ before the cost, it could cause problems
    printf("How much does a pizza cost in your area?");
    printf("enter as $XX.XX\n");
    scanf(" $%f", &cost);

    printf("%f", cost);
    // ....
    return 0;
}
```

- **OUTPUT**
```
How much does a pizza cost in your area?enter as $XX.XX
40.00
0.000000
```

---

# ตัวแปรที่เป็น string ต้องใส่ `&` หรือไม่❓ ใน `scanf`

<v-click>

- คำตอบคือไม่จำเป็นต้องใส่ `&` หน้าตัวแปรที่เป็น string เพราะตัวแปร arrays ถือว่าเป็น pointer อยู่แล้ว
</v-click>

```c


#include<stdio.h>

int main(){
    char topping[24];
    int slices;
    int month, day, year;
    float cost;

    // ....

    // The pizza topping is a string, so your scanf doesn't need an &
    printf("What is your favorite one-word pizza topping?\n");
    scanf(" %s", topping);

    printf("%s", topping);
    return 0;
}

```

---
layout: two-cols
---

# การคำนวณ 🧮

```c
#include<stdio.h>
int main(){
    float a = 19.0;
    float b = 5.0;
    float floatAnswer;

    int x = 19;
    int y = 5;
    int intAnswer;

    // Using two float variables creates an answer of 3.8
    floatAnswer = a / b;
    printf("%.1f divided by %.1f equals %.1f\n", a, b, 
        floatAnswer);

    floatAnswer = x /y; // Take 2 creates an answer of 3.0
    printf("%d divided by %d equals %.1f\n", x, y, 
        floatAnswer);
    
    // This will also be 3, as it truncates and doesn't 
    // round up
    intAnswer = a / b;
```

::right::

# &nbsp;

```c
    printf("%.1f divided by %.1f equals %d\n", a, b, 
        intAnswer);
    return 0;
}
```

- สังเกตุได้ว่า <span v-mark.circle.red> `%` </span> จะใช้ได้เฉพาะกับข้อมูลที่เป็น <span v-mark.highlight.yellow> integer </span> เท่านั้น เช่น 1 % 2

---
layout: two-cols
---

# ตัวอย่างถัดไป


```c
#include<stdio.h>
#define SALESTAX .07

int main(){

    // Variables for the number of tires purchased, price,
    // a before-tax total, and a total cost with tax

    int numTires;
    float tirePrice, beforeTax, netSales;

    /* Get the number of tires purchased and price per 
        tire. 
    */
    printf("How many tires did you purchase? ");
    scanf(" %d", &numTires);
    printf("What was the cost per tire (enter in \
        $XX.XX format)?");
    scanf(" $%f", &tirePrice);



```

::right::

# &nbsp;

```c
    /* Compute the price */ 
    beforeTax = tirePrice * numTires;
    netSales = beforeTax + (beforeTax * SALESTAX);
    printf("You spent $%.2f on your tires\n\n\n",
     netSales);

    return 0;
}
```

- **OUTPUT**

```
How many tires did you purchase? 4
What was the cost per tire (enter in $XX.XX format)?$12.33
%You spent $52.77 on your tires
```

---

# Order of Operators

- จะได้เท่าไร ❓

```c
int answer = 5 + 2 * 3;
```

<v-click at="1">

- จากตัวอย่างด้านบน C จะทำการคำนวน <span  v-mark="{ at: '+2', color: 'red', type: 'circle' }"> `*` </span> ก่อนแล้วมา <span v-mark="{ at: '+1', color: 'red', type: 'circle' }">+</span> ดังนั้นจะได้ <span v-mark="{ at: '+1', color: 'red', type: 'circle' }">11</span>
</v-click>

<div v-click at="2" class="w-[500px] mx-auto">

![Order of Operators](/images/lab3/ordering_operator.png)
</div>

---


<div class="flex gap-3">
<div class="w-[500px]">

<v-click at="1">

- ans = <span> 5 </span> + <span v-mark="{ at: '+2', color: 'red', type: 'underline' }"> 2 </span> * <span v-mark="{ at: '+1', color: 'red', type: 'underline' }"> 4 </span> / <span> 2 </span> % <span> 3 </span> + <span> 10 </span> - <span> 3 </span>

</v-click>

<v-click at="4">

- ans = <span> 5 </span> + <span  v-mark="{ at: '+2', color: 'red', type: 'underline' }"> 8 </span> / <span  v-mark="{ at: '+1', color: 'red', type: 'underline' }"> 2 </span> % <span> 3 </span> + <span> 10 </span> - <span> 3 </span>

</v-click>

<v-click at="7">

- ans = <span> 5 </span> + <span  v-mark="{ at: '+2', color: 'red', type: 'underline' }"> 4 </span> % <span  v-mark="{ at: '+1', color: 'red', type: 'underline' }"> 3 </span> + <span> 10 </span> - <span> 3 </span>

</v-click>


<v-click at="10">

- ans = <span  v-mark="{ at: '+2', color: 'red', type: 'underline' }"> 5 </span> + <span  v-mark="{ at: '+1', color: 'red', type: 'underline' }"> 1 </span> + <span> 10 </span> - <span> 3 </span>

</v-click>

<v-click at="13">

- ans = <span  v-mark="{ at: '+2', color: 'red', type: 'underline' }"> 6 </span> + <span  v-mark="{ at: '+1', color: 'red', type: 'underline' }"> 10 </span> - <span> 3 </span>

</v-click>

<v-click at="16">

- ans = <span  v-mark="{ at: '+2', color: 'red', type: 'underline' }"> 16 </span> - <span  v-mark="{ at: '+1', color: 'red', type: 'underline' }"> 3 </span> 

</v-click>

<v-click at="19">

- ans = <span  v-mark="{ at: '+2', color: 'red', type: 'underline' }"> 13 </span>
</v-click>


</div>

<div>


![Order of Operators](/images/lab3/ordering_operator.png)
</div>

</div>

---

- จะแก้ปัญหาการคำนวณว่าจะให้คำนวนก่อนหลังได้ยังไง❓

<v-click at="1">

- ใช้ <span v-mark="{ at: '+2', color: 'red', type: 'underline' }"> `(` </span> กับ  <span v-mark="{ at: '+1', color: 'red', type: 'underline' }"> `)`</span>

</v-click>

<v-click at="4">

- ตัวอย่าง ans =  <span v-mark="{ at: '+2', color: 'red', type: 'underline' }"> ( 5 + 2) </span>  *  <span v-mark="{ at: '+1', color: 'red', type: 'underline' }"> 3 </span> = <span v-mark="{ at: '+1', color: 'red', type: 'underline' }">21</span> 
</v-click>

<v-click at="8">

- ตัวอย่าง avg =  <span v-mark="{ at: '+2', color: 'red', type: 'underline' }"> ( i + j + k + l) </span>  /  <span v-mark="{ at: '+1', color: 'red', type: 'underline' }"> 4 </span> 
</v-click>

---

- ถ้ามีตัวแปรประเภท integer ตั้งแต่ a ถึง j โดยที่ทุกตัวมีค่าเริ่มต้นเป็น 9 จะประกาศยังไง❓

````md magic-move
```c
int a,b,c,d,e,f,g,h,i,j;
```


```c
int a,b,c,d,e,f,g,h,i,j;
a=9;b=9;c=9;d=9;e=9;f=9;g=9;h=9;i=9;j=9;
```

```c
int a,b,c,d,e,f,g,h,i,j;
a = b = c = d = e = f = g = h = i = j = 9;
```
````

- แล้วถ้า a = 5 * (b = 2) จะได้เท่าไร❓ <v-click at="3"> <span v-mark="{ at: '+1', color: 'red', type: 'underline' }">10</span></v-click>

- ตัวอย่างด้านล่างได้เท่าไร❓ <v-click at="4"> <span v-mark="{ at: '+2', color: 'red', type: 'underline' }">11</span></v-click>
```c
int newValue, oldValue = 10, factor = 1;
newValue = oldValue - -factor;
printf("%d", newValue);
```

---
layout: two-cols
---

# ตัวอย่าง

```c
#include<stdio.h>
int main(){
    int grade1, grade2, grade3, grade4;
    float averageGrade, gradeDelta, percentDiff;

    /* The student got 88s on the first and third test,
       so a multiple assignment statement works. */
    grade1 = grade3 = 88;
    
    grade2 = 79;

    // The user needs to enter the fourth grade
    printf("What did you get on the fourth test");
    printf(" (An integer between 0 and 100)?");
    scanf(" %d", &grade4);

```

::right::

# &nbsp;
```c
    averageGrade = (grade1+grade2+grade3+grade4)/4;
    printf("Your average is %.1f.\n", averageGrade);

    gradeDelta = 95 - averageGrade;
    percentDiff = 100 * ((95 - averageGrade) / 95);
    printf("Your grade is %.1f points lower than the ", 
        gradeDelta);
    printf("top grade in the class (95)\n");
    printf("You are %.1f percent behind ", percentDiff);
    printf("that grade!\n\n\n");
    return 0;
}

```

- **OUTPUT**

```
What did you get on the fourth test 
(An integer between 0 and 100)?50
Your average is 76.0.
Your grade is 19.0 points lower than the 
top grade in the class (95)
You are 20.0 percent behind that grade!
```

---

# Compound Assignment

- เป็นตัวดำเนินการใช้สำหรับปรับปรุงหรืออัพเดทค่าของตัวแปร โดยมีข้อกำหนดว่าข้อมูลใหม่นั้นต้องมีความสัมพันธ์กับข้อมูลเดิม

```c
int lossCount = 1;

lossCount = lossCount + 1; /* Adds 1 to lossCount variable */
```

---
layout: two-cols
---

# ตัวอย่าง

```c
#include<stdio.h>
int main(){

    int ctr = 0;
    ctr = ctr + 1; // increases counter to 1
    printf("Counter is at %d.\n", ctr);
    ctr = ctr + 1; // increases counter to 2
    printf("Counter is at %d.\n", ctr);
    ctr = ctr + 1; // increases counter to 3
    printf("Counter is at %d.\n", ctr);
    ctr = ctr + 1; // increases counter to 4
    printf("Counter is at %d.\n", ctr);
    ctr = ctr + 1; // increases counter to 5
    printf("Counter is at %d.\n", ctr);
    ctr = ctr - 1; // decreases counter to 4
    printf("Counter is at %d.\n", ctr);  
    ctr = ctr - 1; // decreases counter to 3
    printf("Counter is at %d.\n", ctr);  
    ctr = ctr - 1; // decreases counter to 2
    printf("Counter is at %d.\n", ctr);  
    ctr = ctr - 1; // decreases counter to 1
    printf("Counter is at %d.\n", ctr);  
    return 0;
}

```

::right::

- **OUTPUT**

```
Counter is at 1.
Counter is at 2.
Counter is at 3.
Counter is at 4.
Counter is at 5.
Counter is at 4.
Counter is at 3.
Counter is at 2.
Counter is at 1.
```

---

- ถ้าต้องการเขียนให้สั้นลง เราสามารถใช้ compound operator อย่าง `+=` ได้

````md magic-move
```c
int lossCount = 0;
lossCount = lossCount + 1;
```

```c
int lossCount = 0;
lossCount += 1;
```

````

- ถ้าเป็น `*=`

````md magic-move

```c
int sales = 10;
sales = sales * 1.25;
```

```c
int sales = 10;
sales *= 1.25;
```
````

<v-switch>

<template #1>

- ตัวอย่าง Compound Operator

![Compound Operator](/images/lab3/compound_operator.png)
</template>

</v-switch>

---
layout: two-cols
---

# ตัวอย่าง


```c
#include<stdio.h>
int main(){
    int ctr = 0;
    ctr += 1; // increases counter to 1
    printf("Counter is at %d.\n", ctr);
    ctr += 1; // increases counter to 2
    printf("Counter is at %d.\n", ctr);

    printf("Counter is at %d.\n", ctr += 1);
    ctr += 1; // increases counter to 4
    printf("Counter is at %d.\n", ctr);

    printf("Counter is at %d.\n", ctr += 1);
    ctr -= 1; // decreases counter to 4
    printf("Counter is at %d.\n", ctr);
    printf("Counter is at %d.\n", ctr -= 1);
    printf("Counter is at %d.\n", ctr -= 1);
    printf("Counter is at %d.\n", ctr -= 1);

}

```

::right::

- **OUTPUT**

```
Counter is at 1.
Counter is at 2.
Counter is at 3.
Counter is at 4.
Counter is at 5.
Counter is at 4.
Counter is at 3.
Counter is at 2.
Counter is at 1.

```

---
layout: two-cols
---

- ถ้าไปเจอแบบนี้จะตอบอะไร❓

```c
int total = 5;
total *= 2 + 3;
```


<v-click at="1">

- <span v-mark="{ at: '+2', color: 'red', type: 'underline' }">13</span> เพราะคิดว่าจะต้องทำ <span v-mark="{ at: '+1', color: 'red', type: 'underline' }"> * </span> ก่อนแล้วค่อยมา <span v-mark="{ at: '+1', color: 'red', type: 'underline' }"> + </span>  แต่จริงๆแล้วไม่ใช่ 
</v-click>




<v-click at="5">

```c
int total = 5;
total = total * (2+3);

```

</v-click>

<v-click at="6">

- <span v-mark="{ at: '+2', color: 'red', type: 'underline' }">25</span> เพราะว่า <span v-mark="{ at: '+1', color: 'red', type: 'underline' }"> *= </span> อยู่ต่ำกว่า <span v-mark="{ at: '+1', color: 'red', type: 'underline' }"> + </span>  ถ้าดูจากตาราง 
</v-click>

::right::

<v-switch>
<template #1>

<div>


![Order of Operators](/images/lab3/ordering_operator.png)
</div>
</template>
</v-switch>

---

# การ cast ค่า

- จะเป็นการแปลงชนิดของข้อมูลไปเป็นอีกชนิดหนึ่ง ซึ่งเป็นการแปลงแบบชั่วคราว

- ตัวอย่าง

```c
int age = 6;

printf("%f\n",(float)age);

int number = 15;
int yrsService = 5;
float value;
value = (float)(number - 10 * yrsService);

printf("%f",value);

```

- **OUTPUT**

```
6.000000
-35.000000
```