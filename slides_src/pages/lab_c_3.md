---
title: Lab 3 - Basic C Programming Language
transition: none
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
- จงหาจุดผิดใน Code ด้านล่าง
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
    scanf(" %d", &yearBorn);

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

<v-clicks>

- ใช้ logical operator คู่กับ relational operator เพราะว่าการใช้ logical operator จะทำให้เราใช้ relational operator ได้มากกว่าหนึ่งตัว

<div class="flex gap-3">

<div class="w-[500px]">

![logical operator](/images/lab4/relational_operator.png)
</div>
<div class="w-[350px]">

![logical operator](/images/lab4/logical_operator.png)
</div>

</div>
</v-clicks>


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


---

# ตัวอย่าง 1

```c
#include<stdio.h>
int main(){
    int planets = 8, friends = 6, potterBooks = 7, starWars = 6;
    int months = 12, beatles = 4, avengers = 6, baseball = 9;
    int basketball = 5, football = 11;
    /* The first logical statement uses the AND operator to test
       whether the cast of Friends and the Beatles would have 
       enough people to make a baseball team AND the cast of
       Friends and the Avengers would have enough people
       to field a football team. If so, the statements will print.*/
    if((friends + beatles >= baseball) && (friends + avengers >= football)){
            printf("The cast of Friends and the Beatles ");
            printf("could make a baseball team,\n");
            printf("AND the cast of Friends plus the Avengers");
            printf("could make a football team.\n");
    }else{
        printf("Either the Friends cannot make a ");
        printf("baseball team with the Fab Four, \n");
        printf("OR they can't make a Gridiron Gang with the ");
        printf("Avengers (or both!)\n");
    }
    return 0;
}
```

---

# ตัวอย่าง 2

```c
#include<stdio.h>
int main(){
    int planets = 8, friends = 6, potterBooks = 7, starWars = 6;
    int months = 12, beatles = 4, avengers = 6, baseball = 9;
    int basketball = 5, football = 11;
    /* This second logical statement uses the OR operator to test
    whether the number of Star Wars movies is less than months
    in the year OR the number of Harry Potter books is less than
    months in the year. If either statement is true,
    the statements will print. */
    if((starWars <= months) || (potterBooks <= months)){
        printf("\nYou could read one Harry Potter book a month,\n");
        printf("and finish them all in less than a year,\n");
        printf("OR you could see one Star Wars move a month,\n");
        printf("and finish them all in less than a year.\n");
    }else{
        printf("Neither can happend--too many books or movies,\n");
        printf("Not enough time!\n\n");
    }
    return 0;
}
```

---

# ตัวอย่าง 3

```c
#include<stdio.h>
int main(){
    int planets = 8, friends = 6, potterBooks = 7, starWars = 6;
    int months = 12, beatles = 4, avengers = 6, baseball = 9;
    int basketball = 5, football = 11;
    /* This final logical statemnt uses the NOT operator to test
    whether the number of baseball players on a team added
    to the number of basketball players on a team is NOT
    greater than the number of football players on
    a team. If so, the statements will print. */
    if(!(baseball + basketball > football)){
        printf("\nThere are fewer baseball and basketball players");
        printf("combined than football players");
    }else{
        printf("\nThere are more baseball and basketball players\n");
        printf("combined than football players.");
    }
    return 0;
}
```

---

# Conditional Operator

```c
#include<stdio.h>
int main(){
    // Define the integer to hold the user's guess and then get it
    // from the user
    int numPick;
    printf("Pick an integer between 1 and 100 ");
    printf("(The higher the better!)\n");
    scanf(" %d", &numPick); //remember for an int, you do need the &
    printf("%d %s divisible by 2.", numPick, (numPick % 2 == 0) ? ("is") : ("is not"));
    printf("\n%d %s divisible by 3.", numPick, (numPick % 3 == 0) ? ("is") : ("is not"));
    printf("\n%d %s divisible by 4.", numPick, (numPick % 4 == 0) ?
    ("is") : ("is not"));
    printf("\n%d %s divisible by 5.", numPick, (numPick % 5 == 0) ?
    ("is") : ("is not"));
    printf("\n%d %s divisible by 6.", numPick, (numPick % 6 == 0) ?
    ("is") : ("is not"));
    printf("\n%d %s divisible by 7.", numPick, (numPick % 7 == 0) ?
    ("is") : ("is not"));
    printf("\n%d %s divisible by 8.", numPick, (numPick % 8 == 0) ?
    ("is") : ("is not"));
    printf("\n%d %s divisible by 9.", numPick, (numPick % 9 == 0) ?
    ("is") : ("is not"));
    return 0;
}
```

---

# Increment and Decrement operator

- Increment operator `++`
- Decrement operator `--`

```c
#include<stdio.h>
int main(){
    int count = 0;
    // postfix increment operator
    count++;
    printf("count = %d\n", count);
    // prefix increment operator
    ++count;
    printf("count = %d\n", count);
    
    // postfix decrement operator
    count--;
    printf("count = %d\n", count);
    // prefix decrement operator
    --count;
    printf("count = %d\n", count);

    return 0;
}
```

---

- จากโค๊ดด้านล่างจะได้คำตอบอะไร❓

```c
#include<stdio.h>

int main(){
    
    int i = 2, j = 5, n;
    n = ++i * j;
    printf("n = %d\n", n);

    i = 2;
    n = i++ * j;
    printf("n = %d\n", n);
    return 0;
}

```

<v-clicks>

- 15
- 10
</v-clicks>

---

# sizeof 
- หาขนาดที่ใช้ใน memory
````md magic-move

```c
#include<stdio.h>
#include<string.h>
int main(){
    int i = 1;
    float f = 2.0;
    char name[] = "Krit";
    printf("the size of i is %d\n", sizeof(i));
    printf("the size of f is %d\n", sizeof(f));
    printf("the size of name is %d\n", sizeof(name)); // include null zero
    printf("the length of name is %d\n",strlen(name)); // not include null zero
    return 0;
}
```

```c
#include<stdio.h>
#include<string.h>
int main(){
    int i = 1;
    float f = 2.0;
    char name[] = "Krit";
    printf("the size of i is %lu\n", sizeof(i));
    printf("the size of f is %lu\n", sizeof(f));
    printf("the size of name is %lu\n", sizeof(name)); // include null zero
    printf("the length of name is %lu\n",strlen(name)); // not include null zero
    return 0;
}
```
````

---

- `%lu` ❓
- มาจาก unsigned long int
- เพราะว่าคำสั่ง sizeof จะแสดงขนาดออกมาเป็น unsigned long int นั่นเอง

<div class="w-[500px]">

![memory data type](/images/lab4/memory_datatype.png)
</div>

---

# Loop

- การทำงานซ้ำๆกัน
- ปกติ loop จะทำงานได้ก็ต่อเมื่อเงื่อนไขเป็นจริงเท่านั้น และจะทำไปเรื่อยๆ ซึ่งจะเรียกว่า inifinite loop
- ถ้าเงื่อนไขไม่เป็นจริงก็จะหยุดทำงาน

- ตัวอย่างข้างล่างคือ While Loop
```c
#include<stdio.h>
int main(){
    int ctr = 0;
    while(ctr < 5){
        printf("Counter is at %d\n", ctr);
        ctr++; // ctr += 1  OR ctr = ctr + 1 OR ++ctr
    }
    while(ctr > 1){
        printf("Counter is at %d\n", ctr);
        ctr--; // ctr -= 1   OR  ctr = ctr - 1 OR --ctr
    }
    return 0;
}
```

---

# การใช้ DO...WHILE

- การใช้ do - while loop จะมีข้อแตกต่างจาก while loop ตรงที่ do - while loop จะมีการทำงานก่อน แล้วจึงค่อยเช็คเงื่อนไขว่าเป็นจริงหรือไม่ ถ้าเป็นจริงก็จะกลับมาทำงานต่อ ถ้าไม่จริงก็จะข้ามไปเลย

````md magic-move

```c
#include<stdio.h>
int main(){
    float num1, num2, result;
    char choice;
    do {
        printf("Enter your first number to multiply: ");
        scanf("%f", &num1);
        printf("Enter your second number to multiply: ");
        scanf("%f", &num2);
        result = num1 * num2;
        printf("%.2f times %.2f equals %.2f\n\n", num1, num2, result);
        printf("Do you want to enter another pair of numbers ");
        printf("to multiply (Y/N): ");
        scanf(" %c", &choice);
        // IF the user enters a lowercase n, this if statement will convert it to an N
        if (choice == 'n'){
            choice = 'N';
        }
    } while (choice != 'N'); // Don't forget semicolon
    return 0;
}
```

```c
#include<stdio.h>
int main(){
    float num1, num2, result;
    char choice;
    do {
        printf("Enter your first number to multiply: ");
        scanf("%f", &num1);
        printf("Enter your second number to multiply: ");
        scanf("%f", &num2);

        result = num1 * num2;
        printf("%.2f times %.2f equals %.2f\n\n", num1, num2, result);

        printf("Do you want to enter another pair of numbers ");
        printf("to multiply (Y/N): ");
        scanf(" %c", &choice);

    } while (choice != 'N' && choice != 'n'); 
    return 0;
}
```
````

---

# FOR ... LOOP

<v-switch>

<template #0>

```c {*}
#include<stdio.h>
int main(){
    for(
        int ctr = 0;
        ctr < 5; 
        ctr++
    ){
        printf("%d\n", ctr);
    }
    return 0;
}
```
</template>
<template #1>
```c {4}
#include<stdio.h>
int main(){
    for(
        int ctr = 0;
        ctr < 5; 
        ctr++
    ){
        printf("%d\n", ctr);
    }
    return 0;
}
```

</template>
<template #2>


```c {5}
#include<stdio.h>
int main(){
    for(
        int ctr = 0;
        ctr < 5; 
        ctr++
    ){
        printf("%d\n", ctr);
    }
    return 0;
}
```

</template>
<template #3>

```c {8}
#include<stdio.h>
int main(){
    for(
        int ctr = 0;
        ctr < 5; 
        ctr++
    ){
        printf("%d\n", ctr);
    }
    return 0;
}
```

- **OUTPUT**

```
0
```

</template>
<template #4>


```c {6}
#include<stdio.h>
int main(){
    for(
        int ctr = 0;
        ctr < 5; 
        ctr++
    ){
        printf("%d\n", ctr);
    }
    return 0;
}
```

- **OUTPUT**

```
0
```
</template>
<template #5>


```c {5}
#include<stdio.h>
int main(){
    for(
        int ctr = 0;
        ctr < 5; 
        ctr++
    ){
        printf("%d\n", ctr);
    }
    return 0;
}
```

- **OUTPUT**

```
0
```
</template>

<template #6>


```c {8}
#include<stdio.h>
int main(){
    for(
        int ctr = 0;
        ctr < 5; 
        ctr++
    ){
        printf("%d\n", ctr);
    }
    return 0;
}
```

- **OUTPUT**

```
0
1
```
</template>

<template #7>


```c {6}
#include<stdio.h>
int main(){
    for(
        int ctr = 0;
        ctr < 5; 
        ctr++
    ){
        printf("%d\n", ctr);
    }
    return 0;
}
```

- **OUTPUT**

```
0
1
```
</template>
<template #8>


```c {5}
#include<stdio.h>
int main(){
    for(
        int ctr = 0;
        ctr < 5; 
        ctr++
    ){
        printf("%d\n", ctr);
    }
    return 0;
}
```

- **OUTPUT**

```
0
1
```
</template>
<template #9>


```c {8}
#include<stdio.h>
int main(){
    for(
        int ctr = 0;
        ctr < 5; 
        ctr++
    ){
        printf("%d\n", ctr);
    }
    return 0;
}
```

- **OUTPUT**

```
0
1
2
```
</template>
<template #10>


```c {6}
#include<stdio.h>
int main(){
    for(
        int ctr = 0;
        ctr < 5; 
        ctr++
    ){
        printf("%d\n", ctr);
    }
    return 0;
}
```

- **OUTPUT**

```
0
1
2
```
</template>
<template #11>


```c {5}
#include<stdio.h>
int main(){
    for(
        int ctr = 0;
        ctr < 5; 
        ctr++
    ){
        printf("%d\n", ctr);
    }
    return 0;
}
```

- **OUTPUT**

```
0
1
2
```
</template>
<template #12>


```c {8}
#include<stdio.h>
int main(){
    for(
        int ctr = 0;
        ctr < 5; 
        ctr++
    ){
        printf("%d\n", ctr);
    }
    return 0;
}
```

- **OUTPUT**

```
0
1
2
3
```
</template>
<template #13>


```c {6}
#include<stdio.h>
int main(){
    for(
        int ctr = 0;
        ctr < 5; 
        ctr++
    ){
        printf("%d\n", ctr);
    }
    return 0;
}
```

- **OUTPUT**

```
0
1
2
3
```
</template>
<template #14>


```c {5}
#include<stdio.h>
int main(){
    for(
        int ctr = 0;
        ctr < 5; 
        ctr++
    ){
        printf("%d\n", ctr);
    }
    return 0;
}
```

- **OUTPUT**

```
0
1
2
3
```
</template>
<template #15>


```c {8}
#include<stdio.h>
int main(){
    for(
        int ctr = 0;
        ctr < 5; 
        ctr++
    ){
        printf("%d\n", ctr);
    }
    return 0;
}
```

- **OUTPUT**

```
0
1
2
3
4
```
</template>
<template #16>


```c {6}
#include<stdio.h>
int main(){
    for(
        int ctr = 0;
        ctr < 5; 
        ctr++
    ){
        printf("%d\n", ctr);
    }
    return 0;
}
```

- **OUTPUT**

```
0
1
2
3
4
```
</template>
<template #17>


```c {5}
#include<stdio.h>
int main(){
    for(
        int ctr = 0;
        ctr < 5; 
        ctr++
    ){
        printf("%d\n", ctr);
    }
    return 0;
}
```

- **OUTPUT**

```
0
1
2
3
4
```
</template>
<template #18>


```c {10}
#include<stdio.h>
int main(){
    for(
        int ctr = 0;
        ctr < 5; 
        ctr++
    ){
        printf("%d\n", ctr);
    }
    return 0;
}
```

- **OUTPUT**

```
0
1
2
3
4
```
</template>
<template #19>


```c {*}
#include<stdio.h>
int main(){
    for(
        int ctr = 0;
        ctr < 5; 
        ctr++
    ){
        printf("%d\n", ctr);
    }
    return 0;
}
```

- **OUTPUT**

```
0
1
2
3
4
```
</template>
</v-switch>

---

- เปรียบเทียบกับ FOR...LOOP, WHILE...LOOP, DO...WHILE LOOP

````md magic-move
```c 
#include<stdio.h>
int main(){
    for(int ctr = 0;ctr < 5; ctr++){
        printf("%d\n", ctr);
    }
    return 0;
}
```

```c
#include<stdio.h>
int main(){
    int ctr = 0;
    while(ctr<5){
        printf("%d\n", ctr);
        ctr++;
    }
    return 0;
}

```

```c
#include<stdio.h>
int main(){
    int ctr = 0;
    do {
        printf("%d\n", ctr);
        ctr++;
    }while(ctr<5);
    return 0;
}
```
````

<v-click>

- **OUTPUT**

```
0
1
2
3
4
```
</v-click>



---

# ตัวอย่าง

- ผลลัพธ์ด้านล่างมีค่าเท่าไร❓
```c
#include<stdio.h>
int main(){
    for(int i=1;i<18;i+=3){
        printf("%d ", i);
    }
    return 0;
}
```
<v-click>

- **OUTPUT**

```
1, 4, 7, 10, 13, 16
```
</v-click>

---

# NESTED FOR...LOOP

- ผลลัพธ์ด้านล่างมีค่าเท่าไร❓

```c
#include<stdio.h>
int main(){
    for(int outer=1;outer<=3;outer++){
        for(int inner=1;inner<=5;inner++){
            printf("%d", inner);
        }
        printf("\n");
    }
    return 0;
}
```

<v-click>

- **OUTPUT**
```
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
```
</v-click>

---
layout: two-cols
---

# Example 1

```c
#include<stdio.h>
#include<string.h>
int main(){
    char movies[200] = {
        #include "movies.h"
    };
    int watchMovies,index;
    watchMovies = index = 0;
    // print total movie in a list
    for(int i=0;i<strlen(movies);i++){
        if(movies[i]==';'){
            watchMovies++;
        }
    }
    printf("You have watch %d movies\n", watchMovies);
    return 0;   
}
```

::right::
- สร้างไฟล์ movies.h
```c
"Harry Potter;"
"Batman;"
"Starwars;"
```

---

# Example 2

```c
#include<stdio.h>
#include<string.h>
int main(){
    char movies[200] = {
        #include "movies.h"
    };
    int watchMovies,index;
    watchMovies = index = 0;
    char movieName[100];
    for(int i=0;i<strlen(movies);i++){
        if(movies[i]==';'){ // movie name ends with semicolon
            movieName[index] = '\0';
            index = 0;
            // loop movie name by each character
            for(int j=0;j<strlen(movieName);j++){
                printf("%c",movieName[j]);
            }
            printf("\n");
        }else{
            movieName[index] = movies[i];
            index++;
        }
    }
}


```

---
layout: two-cols
---

# Example 3

```c
#include<stdio.h>
#include<string.h>
int main(){
    char movies[200] = {
        #include "movies.h"
    };
    int watchMovies,index,rating,favRating,leastRating;
    watchMovies = index = rating = favRating = 0;
    leastRating = 10;
    char movieName[100], favorite[100], least[100];
    for(int i=0;i<strlen(movies);i++){
        if(movies[i]==';'){ // movie name ends with 
        // semicolon
            movieName[index] = '\0';
            index = 0;
            printf("On a scale of 1 to 10, what\
             would you rate ");
            // loop movie name by each character
            for(int j=0;j<strlen(movieName);j++){
                printf("%c",movieName[j]);
            }
            printf(" ? ");
            scanf("%d", &rating);
```
::right::

```c
            // if favorite rating less than current rating
            if(favRating < rating){
                favRating = rating;
                // assign favorite to current movie name
                strcpy(favorite, movieName);
            }
            // if least rating more than current rating
            // assign current rating to least rating
            if(leastRating > rating){
                leastRating = rating;
                // assign least favorite to current 
                // movie name
                strcpy(least, movieName);
            }
        }else{
            movieName[index] = movies[i];
            index++;
        }
        
    }
    printf("Your favorite movie is %s\n", favorite);
    printf("Your least favorite movie is %s\n", least);
    return 0;
}

```

---
layout: two-cols
---

# break กับ continue

- break
```c {*|14|15|18-21}{lines:true}
#include <stdio.h> 
int main()
{
    int numTest;
    float stTest, avg, total = 0.0;
    // Asks for up to 25 tests
    for (numTest = 0; numTest < 25; numTest++)
    {
        // Get the test scores, and check if -1 
        // was entered
        printf("\nWhat is the next student's test\
         score? ");
        scanf(" %f", &stTest);
        if (stTest < 0.0) {
            break;
        }       
        total += stTest;
    }
    avg = total / numTest;
    printf("\nThe average is %.1f%%.\n", avg);
    return 0;
}
```
::right::

- **OUTPUT**
```

What is the next student's test score? 10

What is the next student's test score? 20

What is the next student's test score? 30

What is the next student's test score? -1

The average is 20.0%.
```

---
layout: two-cols
---
- continue

```c {*|8|11|14|6|*}
#include <stdio.h>
int main()
{
    int i;
    // Loops through the numbers 1 through 10
    for (i = 1; i <= 10; i++)
    {
        if ((i%2) == 1) // Odd numbers have a 
        // remainder of 1
        {
            printf("I'm rather odd...\n");
            // Will jump to the next iteration 
            // of the loop
            continue;
        } 
        printf("Even up!\n");
    }
    return 0;
}
```
::right::

- **OUTPUT**

```
I'm rather odd...
Even up!
I'm rather odd...
Even up!
I'm rather odd...
Even up!
I'm rather odd...
Even up!
I'm rather odd...
Even up!
```

---
layout: two-cols
---

# SWITCH ... CASE

```c
#include <stdio.h>
#include <stdlib.h>
int main() {
    int choice;
    printf("What do you want to do?\n");
    printf("1. Add New Contact\n");
    printf("2. Edit Existing Contact\n");
    printf("3. Call Contact\n");
    printf("4. Text Contact\n");
    printf("5. Exit\n");
    do {
        printf("Enter your choice: ");
        scanf(" %d", &choice);
        switch(choice)
        {
            case (1): 
                printf("\nTo add you will need the ");
                printf("contact's\n");
                printf("First name, last name, and \
                number.\n");
                break;

```
::right::


```c

            case (2): 
                printf("\nGet ready to enter the name\
                 of ");
                printf("name of the\n");
                printf("contact you wish to change.\n");
                break;
            case (3): 
                printf("\nWhich contact do you ");
                printf("wish to call?\n");
                break;
            case (4): 
                printf("\nWhich contact do you ");
                printf("wish to text?\n");
                break;
            case (5): 
                exit(1); //Exits the program early
            default: 
                printf("\n%d is not a valid choice.\n", 
                choice);
                printf("Try again.\n");
                break;
        }
    } while ((choice < 1) || (choice > 5));
    return 0;
}
```

---

# Example 2

- https://onlinegdb.com/Vbonm2AWO

- <QRCode value="https://onlinegdb.com/Vbonm2AWO" :size="200" render-as="svg"/>