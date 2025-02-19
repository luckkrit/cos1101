---
title: Lab 3 - Basic C Programming Language
---

# Lab 3 - Basic C Programming Language

---

- ข้อสังเกตุการใช้ scanf ทำไมต้อง เว้นช่องว่างหน้า `%c` ในบรรทัดที่ 10

````md magic-move
```c {*}{lines: true}
#include <stdio.h>

int main()
{
    char answer;
    char answer2;
    printf("Please input your favorite character: ");
    scanf("%c", &answer);
    printf("Please input your favorite integer: ");
    scanf(" %c", &answer2);
    
    printf("You input: %c %c", answer, answer2);
    return 0;
}
```

```c {10}{lines: true}
#include <stdio.h>

int main()
{
    char answer;
    char answer2;
    printf("Please input your favorite character: ");
    scanf("%c", &answer);
    printf("Please input your favorite integer: ");
    scanf(" %c", &answer2);
    
    printf("You input: %c %c", answer, answer2);
    return 0;
}
```
````

<v-click at="1">

- เพราะว่าถ้าเว้นไว้จะช่วยในกรณีที่เรากรอก scanf ในคำสั่งก่อนหน้านั่นก็คือบรรทัดที่ 8 แล้วเราเผลอกดปุ่มเว้นวรรค และ enter ลงไป ตัว %c จะรับค่าว่างนั้นไปแทน แทนที่จะเป็นตัวอักษรที่เรากรอกลงไป
</v-click>
---

# if และ relative operator

- ถ้าเราจะทดสอบข้อมูลเราก็จะใช้ relational operators เปรียบเทียบค่า 2 ค่า

![Relational Operator](/images/lab4/relational_operator.png)

---
layout: two-cols
---

# ตัวอย่าง

```c
#include<stdio.h>

int main(){
    int i = 5;
    int j = 10;
    int k = 15;
    int l = 5;
    
    // the following statemments are true
    printf("The following statements are true:\n");
    printf("i == l ? %d\n", i == l);
    printf("j < k ? %d\n", j < k);
    printf("k > i ? %d\n", k > i);
    printf("j != l ? %d\n", j !=l);

    // the following statements are false
    printf("\nThe following statements are false:\n");
    printf("i > j ? %d\n", i > j);
    printf("k < j ? %d\n", k < j);
    printf("k == l ? %d\n", k == l);
    return 0;
}
```

::right::

- **OUTPUT**

```
The following statements are true:
i == l ? 1
j < k ? 1
k > i ? 1
j != l ? 1

The following statements are false:
i > j ? 0
k < j ? 0
k == l ? 0
```


<v-click at="1">

- จาก Code ด้านบน สามารถสรุปได้ว่าในกรณีที่เปรียบเทียบแล้วเป็น True จะได้ค่า <span v-mark="{ at: '+2', color: 'red', type: 'underline' }">1</span> และ False จะได้ค่า <span v-mark="{ at: '+1', color: 'red', type: 'underline' }">0</span>

</v-click>


---

- ถ้าเราจะ compare character กับ float จะทำยังไง

```c
#include <stdio.h>

int main() {
    char charValue = 'A'; // Character value
    float floatValue = 65.0; // Float value

    // Typecast charValue to an integer for comparison
    if ((int)charValue == (int)floatValue) {
        printf("Values are equal!\n");
    } else {
        printf("Values are not equal!\n");
    }

    return 0;
}
```

- **OUTPUT**

```
Values are equal!
```

- ที่เท่ากันเพราะ `A` ใน ASCII Table คือ `65`

---

- จากโค๊ดด้านล่างจะเป็นยังไง

```c
#include <stdio.h>

int main() {

    int a = (4 < 10);
    int b = (b == 9);

    printf("a = %d\n", a);
    printf("b = %d\n", b);

    return 0;
}

```

- **OUTPUT**

```
a = 1
b = 0
```

---

# การใช้ if

- if จะใช้กับ rational operators

```c
#include<stdio.h>

int main(){

    int a = 1;

    if(a == 1){
        printf("a == %d", a);
    }
    return 0;
}

```

- **OUTPUT**

```
a == 1
```

---
layout: two-cols
---

# ตัวอย่าง

```c
#include <stdio.h>
#define CURRENTYEAR 2025

int main(){
    int yearBorn, age;
    printf("What year were you born?\n");
    scanf(" &d", &yearborn);

    /**
    This if statement can do some data validation, 
    making sure the year makes sense.
    The statements will only execute if the year 
    is after the current year.
     */
    if (yearBorn > CURRENTYEAR){
        printf("Really? You haven't been born yet?\n");
        printf("Want to try again with a different \
         year?\n");
        printf("What year were you born?\n");
        scanf(" %d", &yearBorn);
    }


```

::right::

# &nbsp;
```c
    age = CURRENTYEAR - yearBorn;
    printf("\nSo this year you will turn %d on your \
         birthday!\n", age);
    
    /**
    The second if statement uses the modules operator
     to test if the year of birth was a Leap Year. 
     Again, only if it is will the code execute
    */
    if((yearBorn % 4)==0){
        printf("\nYou were born in a Leap Year--cool!\n");
    }

    return 0;
}
```

- Leap Year คือปีที่เดือนกุมภาพันธ์มี 29 วัน หรือทั้งปีรวมกันได้ 366 วัน

---
layout: two-cols
---
# ตัวอย่าง

- จากตัวอย่างที่แล้ว ถ้าเงื่อนไขเป็น `False` ก็จะไม่ทำต่อ


```c
#include <stdio.h>
#define CURRENTYEAR 2025

int main(){
    int yearBorn, age;
    printf("What year were you born?\n");
    scanf(" &d", &yearborn);

    /**
    This if statement can do some data validation, 
    making sure the year makes sense.
    The statements will only execute if the year 
    is after the current year.
     */
    if (yearBorn > CURRENTYEAR){
        printf("Really? You haven't been born yet?\n");
        printf("Want to try again with a different \
         year?\n");
        printf("What year were you born?\n");
        scanf(" %d", &yearBorn);
    }


```

::right::

# &nbsp;
- การที่มี if โผล่ขึ้นมาใน `else` เรียกว่า `nested if`

```c
    else
    {

        age = CURRENTYEAR - yearBorn;
        printf("\nSo this year you will turn %d on your \
             birthday!\n", age);
        /**
        The second if statement uses the modules operator
         to test if the year of birth was a Leap Year. 
         Again, only if it is will the code execute
        */
        if((yearBorn % 4)==0){
            printf("\nYou were born in a Leap \
            Year--cool!\n");
        }
    }

    return 0;
}
```

---

# ตัวอย่าง
```c
#include<stdio.h>
int main(){
    int prefer;
    printf("On a scale of 1 t 10, how happy are you?\n");
    scanf(" %d", &prefer);
    /**
        Once the user's level of happiness is entered, a series of if statements 
        test the number against decreasing numbers. Only one of the four will be executed.
    */
    if(prefer >= 8){
        printf("Great for you!\n");
        printf("Things are going well for you!\n");
    } else if (prefer >= 5){
        printf("Better than average, right?\n");
        printf("Maybe things will get even better soon!\n");
    } else if (prefer >= 3){
        printf("Sorry you're feeling not so great.\n");
        printf("Hope things turn around soon...\n");
    } else {
        printf("Hang in there--things have to improve, right?\n");
        printf("Always darkest before the dawn.\n");
    }
    return 0;
}
```

---

- การใช้ if มีข้อระวัง
- if ไม่จำเป็นต้องมี `{}` ก็ได้ ถ้ามีแค่คำสั่งเดียว เช่นบรรทัดที่ 5
- หลัง if อย่าใส่ `;` ปิดท้ายเพราะมันจะถือว่าจบการเปรียบเทียบเงื่อนไขแล้ว เช่นบรรทัดที่ 7

````md magic-move
```c {*}{lines:true}
#include <stdio.h>
int main(){
    int a = 1;

    if(a==1)printf("a = %d\n", a);

    if(a==1);
    {
        printf("a = %d\n", a);
    }
    return 0;
}
```

```c {5}{lines:true}
#include <stdio.h>
int main(){
    int a = 1;

    if(a==1)printf("a = %d\n", a);

    if(a==1);
    {
        printf("a = %d\n", a);
    }
    return 0;
}
```

```c {3|7|9}{lines:true}
#include <stdio.h>
int main(){
    int a = 2;

    if(a==1)printf("a = %d\n", a);

    if(a==1);
    {
        printf("a = %d\n", a);
    }
    return 0;
}
```
````

---

# Logical Operator

- ถ้าต้องการเปรียบเทียบว่า `21 <= age <= 65` จะเขียนโปรแกรมยังไง❓

<v-click>

````md magic-move
```c
#include<stdio.h>
int main(){
    int age = 21;
    if(age<=21){
        if(age<=65){
        }
    }
}
```

```c
#include<stdio.h>
int main(){
    int age = 21;
    if(age<=21 && age<=65){
    }
}
```
````

</v-click>



---

# ตัวอย่าง Logical Operators

<v-switch>
<template #0>

- `&&` คือ And

```c
#include<stdio.h>
int main(){
    int age = 21;
    if((age >= 21) && (age <= 65)){

    }
    return 0;
}
```
</template>

<template #1>

- `||` คือ Or

```c
#include<stdio.h>
int main(){
    int hrsWorked = 41;
    float sales = 30000;
    if((hrsWorked>40) || (sales > 25000.00)){

    }
    return 0;
}
```
</template>

<template #2>

- `!` คือ Not
```c
#include<stdio.h>
int main(){
    int isCharterMember = 0;
    if(!(isCharterMember)){

    }
    return 0;
}
```

- อันนี้ใช้ไม่ได้ ❌ จะ Error ❗
```c
#include<stdio.h>
int main(){
    int isCharterMember = 0;
    if !isCharterMember{

    }
    return 0;
}
```
</template>
</v-switch>

