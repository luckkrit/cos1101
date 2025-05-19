---
title: Lab 5 - Basic C Programming Language
transition: none
---
# Lab 5 - Basic C Programming Language

---

# getchar() และ putchar()

- putchar() พิมพ์ตัวอักษร 1 ตัวอักษรออกทางหน้าจอ
- getchar() รับตัวอักษร 1 ตัวอักษรจาก keyboard

```c
#include <stdio.h>
#include <string.h>

int main(){
    int i;
    char msg[] = "C is fun";
    for(i=0;i<strlen(msg);i++){
        putchar(msg[i]);
    }
    putchar('\n');
    return 0;
}
```

- **OUTPUT**

```
C is fun
```

---

```c
#include <stdio.h>
#include <string.h>

int main(){
    int i;
    char msg[25];
    for(i=0;i<25;i++){ // cannot use strlen(msg) because the lenght of msg is still 0
        msg[i] = getchar();
        if(msg[i]=='\n'){ // if press enter key
            i--;
            break;
        }
    }
    putchar('\n');
    for(;i>=0;i--){
        putchar(msg[i]);
    }
    putchar('\n');
    return 0;
}
```

- **OUTPUT**
```
C is fun

nuf si C
```

---

# ข้อควรระวัง

- ตามหลักแล้ว getchar() จะ return เป็น int เสมอ แต่ในบางกรณีก็สามารถใช้ char เก็บค่าจาก getchar() ได้ เพราะใน C char กับ int สามารถแลกเปลี่ยนกันได้
- แต่ก็มีข้อควรระวังที่ถ้าเป็นโปรแกรมที่มีความซับซ้อน ก็อาจจะไม่ปลอดภัยถ้าจะเก็บ getchar ในรูป char
- getchar() จะมี buffer ไว้รองรับตัวอักษรจาก keyboard ดังนั้นเราสามารถลบตัวอักษรโดยใช้ backspace ได้ ตราบใดที่ไม่ได้กดปุ่ม Enter
- ข้อเสียที่ตามมาคือจะมี Enter key ติดมาด้วย นั่นก็คือ \n

---

- ถ้าจะเอา `\n` ออกจะทำได้ยังไง ❓

```c
#include <stdio.h>
int main(){
    printf("What are your two initials?\n");
    char firstInit = getchar();
    char lastInit = getchar();
    printf("You input %c and %c", firstInit, lastInit);
    return 0;
}
```

- **OUTPUT**

- ผลลัพธ์ที่ได้ก็จะไม่ตรงกับที่เราต้องการ ❌

```
What are your two initials?
K
You input K and 
```

---

- วิธีแก้วิธีแรก

```c
#include<stdio.h>
int main(){
    char nl,firstInit,lastInit;
    printf("What are your two initials?\n");
    firstInit = getchar();
    nl = getchar();
    lastInit = getchar();
    nl = getchar();
    printf("You input %c and %c", firstInit, lastInit);
    return 0;
}
```

- **OUTPUT**

```
What are your two initials?
K
R
You input K and R
```

---

# วิธีแก้วิธีที่สอง

```c
#include<stdio.h>
int main(){
    char nl,firstInit,lastInit;
    printf("What are your two initials?\n");
    firstInit = getchar();
    lastInit = getchar();
    nl = getchar();
    printf("You input %c and %c", firstInit, lastInit);
    return 0;
}
```

- **OUTPUT**

```
What are your two initials?
KR
You input K and R
```

---

# getch() กับ putch() ใช้ใน DOS ได้อย่างเดียว

- getch() จะทำงานได้เร็วกว่า getchar() ตรงที่ไม่มี buffer
- ดังนั้นข้อเสียของ getch() คือถ้าพิมพ์ผิดก็จะไม่สามารถแก้ไขได้ ข้อมูลที่ป้อนเข้าไปจะไปเก็บในตัวแปรทันที
- getch() จะไม่แสดงผลออกทางหน้าจอ ถ้าจะให้แสดงต้องใช้ putch() พิมพ์ออกมา

```c
#include<stdio.h>
#include<conio.h>
int main(){
    char nl,firstInit,lastInit;
    printf("What are your two initials?\n");
    firstInit = getch();
    putch(firstInit);
    lastInit = getch();
    putch(lastInit);
    printf("You input %c and %c", firstInit, lastInit);
    return 0;
}
```

---

# Character-Testing Functions


```c
#include<stdio.h>
#include<ctype.h>
int main(){
    char nl,firstInit,lastInit;
    printf("What are your two initials?\n");
    firstInit = getchar();
    lastInit = getchar();
    nl = getchar();
    printf("You input %c and %c", firstInit, lastInit);
    if(isalpha(firstInit)){
        printf("You print : %c which is a letter",firstInit);
    }else{
        printf("You print : %c which is not a letter",firstInit);
    }
    return 0;
}

```

---

# Advanced math

- include `math.h` to use `floor()` and `ceil()`
- มักใช้กับเลขทศนิยม
- `floor` ปัดขึ้น 
- `ceil` คือปัดลง

---

# ตัวอย่างการใช้ ceil

```c
#include <stdio.h>
#include <math.h>
int main()
{
    float change = 0;
    float amtPaid = 20;
    float cost = 15.7;
    change = amtPaid - cost;
    float dollars = ceil(change);
    printf("The change includes %f dollar bills.\n", dollars);
    return 0;
}
```

- **OUTPUT**

```
The change includes 5.000000 dollar bills.
```

---

# ตัวอย่างการใช้ floor

```c
#include <stdio.h>
#include <math.h>
int main()
{
    float change = 0;
    float amtPaid = 20;
    float cost = 15.7;
    change = amtPaid - cost;
    float dollars = floor(change);
    printf("The change includes %f dollar bills.\n", dollars);
    return 0;
}
```

- **OUTPUT**

```
The change includes 4.000000 dollar bills.
```

---

# ตัวอย่าง

```c
#include <stdio.h>
#include <math.h>
int main(){
    float lowVal1 = floor(18.5);
    float lowVal2 = floor(-18.5);
    float hiVal1 = ceil(18.5);
    float hiVal2 = ceil(-18.5);
    return 0;
}
```

- **OUTPUT**

```
lowVal1 = 18.000000
lowVal2 = -19.000000
hiVal1 = 19.000000
hiVal2 = -18.000000
```

---

# Absolute Value

- จะได้ค่าที่เป็นบวกเสมอ

```c
#include <stdio.h>
#include <math.h>
int main(){
    printf("Absolute value of 25.0 is %.0f.\n", fabs(25.0));
    printf("Absolute value of -25.0 is %.0f.\n", fabs(-25.0));
    return 0;
}
```

- **OUTPUT**

```
Absolute value of 25.0 is 25.
Absolute value of -25.0 is 25.
```

---

# Power and Squareroot


```c
#include <stdio.h>
#include <math.h>
int main(){
    printf("10 raised to the third power is %.0f.\n", pow(10.0, 3.0));
    printf("The square root of 64 is %.0f.\n", sqrt(64));
    return 0;
}
```

- **OUTPUT**

```
10 raised to the third power is 1000.
The square root of 64 is 8.
```

---

# Trigonemetry

<div>

![Trigone metry](/images/lab5/trigone.png)
</div>

```c
#include <stdio.h>
int main(){
    float radians = degrees * (3.14159 / 180.0);
    printf("The radians is %f", radians);
    return 0;
}
```

---
layout: two-cols
---

# ตัวอย่าง

```c
#include <stdio.h>
#include <string.h>
#include <math.h>
int main(){
    printf("It's time to do your math homework!\n");
    printf("Section 1: Square Roots\n");
    printf("The square root of 49.0 is %.1f\n", 
    sqrt(49.0));
    printf("The square root of 149.0 is %.1f\n", 
    sqrt (149.0));
    printf("The square root of .149 is %.2f\n", 
    sqrt (.149));
    printf("\n\nSection 2: Powers\n");
    printf("4 raised to the 3rd power is %.1f\n",
     pow(4.0, 3.0));
    printf("7 raised to the 5th power is %.1f\n",
     pow(7.0, 5.0));
    printf("34 raised to the 1/2 power is %.1f\n",
     pow(34.0, .5));
```

::right::

# &nbsp;

```c

  printf("\n\nSection 3: Trigonometry\n");
  printf("The cosine of a 60-degree angle is %.3f\n",
  cos((60*(3.14159/180.0))));
  printf("The sine of a 90-degree angle is %.3f\n",
  sin((90*(3.14159/180.0))));
  printf("The tangent of a 75-degree angle is %.3f\n",
  tan((75*(3.14159/180.0))));
  printf("The arc cosine of a 45-degree angle is %.3f\n",
  acos((45*(3.14159/180.0))));
  printf("The arc sine of a 30-degree angle is %.3f\n",
  asin((30*(3.14159/180.0))));
  printf("The arc tangent of a 15-degree angle is %.3f\n",
  atan((15*(3.14159/180.0))));
  printf("\nSection 4: Log functions\n");
  printf("e raised to 2 is %.3f\n", exp(2));
  printf("The natural log of 5 is %.3f\n", log(5));
  printf("The base-10 log of 5 is %.3f\n", log10(5));
  return 0;
}
```

---
layout: two-cols
---

# OUTPUT

```
It's time to do your math homework!
Section 1: Square Roots
The square root of 49.0 is 7.0
The square root of 149.0 is 12.2
The square root of .149 is 0.39


Section 2: Powers
4 raised to the 3rd power is 64.0
7 raised to the 5th power is 16807.0
34 raised to the 1/2 power is 5.8


```

::right::

# &nbsp;

```
Section 3: Trigonometry
The cosine of a 60-degree angle is 0.500
The sine of a 90-degree angle is 1.000
The tangent of a 75-degree angle is 3.732
The arc cosine of a 45-degree angle is 0.667
The arc sine of a 30-degree angle is 0.551
The arc tangent of a 15-degree angle is 0.256

Section 4: Log functions
e raised to 2 is 7.389
The natural log of 5 is 1.609
The base-10 log of 5 is 0.699
```

---

# Random number

```c
#include <stdlib.h>
#include <stdio.h>
int main(){
    int dice = (rand() % 5) + 1; /* From 1 to 6 */
    printf("The random is %d", dice);
    return 0;
}
```

- แต่ละเครื่องจะได้ค่าไม่เหมือนในตัวอย่างเพราะมันเป็นการสุ่ม
- ถ้าสังเกตุดีๆ กดรันอีกหลายๆครั้ง ค่ามันจะไม่เปลี่ยน

```
The random is 4
```
---

# Seed

- ถ้าจะให้ค่าเปลี่ยนจะต้องมีการตั้งค่าการ seed โดยใช้ `srand()`
- และกระบวนการ seed จะใช้เวลา นั่นก็คือ `time_t` เข้ามาจัดการสร้างค่า random


```c
#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#include<ctype.h>
int main(){
    int dice;
    time_t t;
    srand(time(&t));
    dice = (rand() % 5) + 1;
    printf("The random is %d", dice);
    return 0;
}
```

```
The random is 5
```

---
layout: two-cols
---

# ตัวอย่าง

```c
#include <stdio.h>
#include <string.h>
#include <time.h>
#include <ctype.h>
int main(){
    int dice1, dice2;
    int total1, total2;
    time_t t;
    char ans;
    // Remember that this is needed to make 
    // sure each random number
    // generated is different
    srand(time(&t));
    // This would give you a number between 
    // 0 and 5, so the + 1
    // makes it 1 to 6
    dice1 = (rand() % 5) + 1;
    dice2 = (rand() % 5) + 1;
    total1 = dice1 + dice2;
    printf("First roll of the dice was %d and \
     %d, ", dice1, dice2);
    printf("for a total of %d.\n\n\n", total1);
```
::right::

# &nbsp;

```c
do {
    puts("Do you think the next roll will be ");
    puts("(H)igher, (L)ower, or (S)ame?\n");
    puts("Enter H, L, or S to reflect your guess.");
    scanf(" %c", &ans);
    ans = toupper(ans);
} while ((ans != 'H') && (ans != 'L') && (ans != 'S'));
// Roll the dice a second time to get your second total
dice1 = (rand() % 5) + 1;
dice2 = (rand() % 5) + 1;
total2 = dice1 + dice2;
// Display the second total for the user
printf("\nThe second roll was %d and %d, ", dice1, dice2);
printf("for a total of %d.\n\n", total2);
// Now compare the two dice totals against 
// the user's guess
// and tell them if they were right or not.
```

<div class="flex justify-end">
    <Link to="22">ต่อ ➡</Link>
</div>

---

```c

    if (ans == 'L'){
        if (total2 < total1){
            printf("Good job! You were right!\n");
            printf("%d is lower than %d\n", total2, total1);
        }else {
            printf("Sorry! %d is not lower than %d\n\n",
             total2, total1);
        }
    }else if (ans == 'H'){
        if (total2 > total1){
            printf("Good job! You were right!\n");
            printf("%d is higher than %d\n", total2, total1);
        }else{
            printf("Sorry! %d is not higher than %d\n\n", total2, total1);
        }
    }else if (ans == 'S') {
        if (total2 == total1){
            printf("Good job! You were right!\n");
            printf("%d is the same as %d\n\n", total2,
             total1);
        }else{
            printf("Sorry! %d is not the same as %d\n\n",
            total2, total1);
        }
    }
    return(0);
}
```

---

# Array

- การประกาศ Array พร้อมกับประกาศสมาชิกภายใน Array จะมีการกำหนดขนาด หรือไม่กำหนดขนาดก็ได้

```c
#include<stdio.h>
int main(){
    int ages[5] = {5, 27, 65, 40, 92};
    int ages[]; // Error
    int ages[] = {5, 27, 65, 40, 92};
    return 0;
}
```

---

# String vs Char array

- ความต่างคือ String จะมี string terminator หรือ `\0` ปิดท้าย โดย compiler จะเป็นคนใส่ให้
- ส่วน Char array ไม่จำเป็นต้องมี `\0` ปิดท้าย

```c
#include<stdio.h>
int main(){
    char grades[5] = {'A','B','C','D','F'};
    char italCity[7] = {'V','e','r','o','n','a','\0'};
    char italCity2[7] = "Verona";
    return 0;
}
```

---

# การหาขนาดของข้อมูล

- การใช้ sizeof
- ตัวแปร int มีขนาด 4 bytes

```c
#include<stdio.h>
int main(){
    char grades[5] = {'A','B','C','D','F'};
    char italCity[7] = {'V','e','r','o','n','a'};
    int a = 1;
    float b = 2.0;
    printf("%lu, %lu, %lu, %lu\n", sizeof(grades), sizeof(italCity), sizeof(a), sizeof(b));
    return 0;
}
```

- **OUTPUT**

```
5, 7, 4, 4
```

---

# การใส่ค่าลงใน Arrays

- ในกรณี string จะเปลี่ยนค่าได้ก็ต่อเมื่อใช้ strcpy

```c
#include<stdio.h>
#include<string.h>
int main(){
    char city[] = "Verona";
    printf("%s\n", city);
    strcpy(city, "Bangkok");
    printf("%s\n", city);
    return 0;
}
```

- ในกรณีนี้จะมี warning

```
main.c: In function ‘main’:
main.c:14:5: warning: ‘__builtin_memcpy’ writing 8 bytes into a region of size 7 overflows the destination [-Wstringop-overflow=]
   14 |     strcpy(city, "Bangkok");
      |     ^~~~~~~~~~~~~~~~~~~~~~~
main.c:12:10: note: destination object ‘city’ of size 7
   12 |     char city[] = "Verona";
      |          
```

---

- เนื่องจากตัวแปร city ไม่ได้กำหนดขนาดไว้ตอนแรก ทำให้ city จะถือว่ามีขนาดเป็น 7 
- และเมื่อทำการ copy string ที่ชื่อว่า `Bangkok` พร้อมกับ `\0` ปิดท้ายด้วยซึ่งมีขนาดเป็น 8 เลยทำให้เกิด warning
- วิธีแก้คือกำหนดขนาดล่วงหน้าให้มากๆเผื่อขาด

```c
#include<stdio.h>
#include<string.h>
int main(){
    char city[10] = "Verona";
    printf("%s\n", city);
    strcpy(city, "Bangkok");
    printf("%s\n", city);
    return 0;
}
```

---

- ในกรณีข้อมูลที่ไม่ใช่ string ยังต้องใช้ loop ในการวนเก็บข้อมูลใน array

```c
#include<stdio.h>
int main(){
    int ages[3];
    for (int i = 0; i < 3; i++)
    {
        printf("What is the age of child #%d? ", i+1);
        scanf(" %d", &ages[i]); // Gets next age from user
    }
    printf("These child's age are: ");
    for (int i = 0; i < 3; i++){
        printf("%d ", ages[i]);
    }
    return 0;
}
```

---
layout: two-cols
---

# ตัวอย่าง

```c
#include <stdio.h>
int main()
{
	int gameScores[10] = {12, 5, 21, 15, 32, 10};
	int totalPoints = 0;
	int i;
	float avg;
// Only need scores for last 4 games so the loop will 
// cover array elements 6-9
	for (i=6; i < 10; i++)
	{
// Add one to the array number as the user won't think
// of the first game as game 0, but game 1
		printf("What did the player score in game %d? ", 
            i+1);
		scanf(" %d", &gameScores[i]);
	} 
```
::right::

# &nbsp;

```c

// Now that you have all 10 scores, loop through the 
// scores to get total points in order to calculate 
// an average.
	for (i=0; i<10; i++)
	{
		totalPoints += gameScores[i];
	} 
// Use a floating-point variable for the average as it is
// likely to be between two integers
	avg = ((float)totalPoints/10);
	printf("\n\nThe Player's scoring average is %.1f.\n", 
        avg);
	return(0);
}
```

- **OUTPUT**
```
What did the player score in game 7? 10
What did the player score in game 8? 20
What did the player score in game 9? 30
What did the player score in game 10? 40


The Player's scoring average is 19.5.
```

---
layout: two-cols
---

# ตัวอย่าง - การค้นหาใน Array

```c
#include <stdio.h>
int main() {
	int ctr; // Loop counter
	int idSearch; // Customer to look for (the key)
	int found = 0; // Will be 1 (true) if customer is found
    // Defines the 10 elements in the two parallel arrays
	int custID[10] = {313, 453, 502, 101, 892,
	                  475, 792, 912, 343, 633};
	float custBal[10] = {0.00, 45.43, 71.23, 301.56, 9.08,
    192.41, 389.00, 229.67, 18.31, 59.54};
	/* Interact with the user looking for a balance. */
	printf("\n\n*** Customer Balance Lookup ***\n");
	printf("What customer number do you need to check? ");
	scanf(" %d", &idSearch);
	/* Search to see that the customer ID exists in 
    the array */
	for (ctr=0; ctr<10; ctr++)
	{
		if (idSearch == custID[ctr])
		{
			found = 1;
			break;
		}
	}
```
::right::

```c

	if (found)
	{
		if (custBal[ctr] > 100.00)
		{
			printf("\n** That customer's balance is $%.2f.\n",
			       custBal[ctr]);
			printf(" No additional credit.\n");
		} else
		{
			printf("\n** The customer's credit is good!\n");
		}
	} else
	{
		printf("** You must have typed an incorrect customer\
         ID.");
		printf("\n ID %3d was not found in list.\n",
         idSearch);
	}
	return 0;
}

```

- **OUTPUT**

```
*** Customer Balance Lookup ***
What customer number do you need to check? 313

** The customer's credit is good!
```

---
layout: two-cols
---

# ตัวอย่าง 2

```c
#include <stdio.h>
int main(){
    int gameScores[10] = {12, 5, 21, 15, 32, 10, 6, 31, 
    11, 10};
    int gameRebounds[10] = {5, 7, 1, 5, 10, 3, 0, 7, 6,4};
    int gameAssists[10] = {2, 9, 4, 3, 6, 1, 11, 6, 9,10};
    int bestGame = 0; //The comparison variable for best 
    // scoring game
    int gmMark = 0; // This will mark which game is the 
    // best scoring game
    int i;
    for (i=0; i<10; i++){
        // if loop will compare each game to the current
        //  best total if the current score is higher, it 
        // becomes the new best and the counter variable 
        // becomes the new flag gmMark
        if (gameScores[i] > bestGame){
            bestGame = gameScores[i];
            gmMark = i;
        }
    }
    return 0;
}

```

::right::

```c

    // Print out the details of the best scoring game
    // Because arrays start at 0, add 1 to the game number
    printf("\n\nThe Player's best scoring game \
    totals:\n");
    printf("The best game was game #%d\n", gmMark+1);
    printf("Scored %d points\n", gameScores[gmMark]);
    printf("Grabbed %d rebounds\n", gameRebounds[gmMark]);
    printf("Dished %d assists\n", gameAssists[gmMark]);
    return(0);
}
```

- ถ้าสังเกตุให้ดีๆ จาก 2 ตัวอย่างข้างต้นเป็นการใช้ sequential search

---
layout: two-cols
---

# Bubble sort

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main(){
    int ctr, inner, outer, didSwap, temp;
    int nums[10];
    time_t t;
    // If you don't include this statement, your program
    //  will always generate the same 10 random numbers
    srand(time(&t));
    // The first step is to fill the array with random
    //  numbers (from 1 to 100)
    for (ctr = 0; ctr < 10; ctr++) {
        nums[ctr] = (rand() % 99) + 1;
    }
    // Now list the array as it currently is before
    //  sorting
    puts("\nHere is the list before the sort:");
    for (ctr = 0; ctr < 10; ctr++) {
        printf("%d\n", nums[ctr]);
    }
    return 0;
}
```

::right::

# &nbsp;

```c
    // Sort the array
    for (outer = 0; outer < 9; outer++) {
        didSwap = 0; //Becomes 1 (true) if list is not yet
        //  ordered
        for (inner = outer; inner < 10; inner++) {
            if (nums[inner] < nums[outer]) {
                temp = nums[inner];
                nums[inner] = nums[outer];
                nums[outer] = temp;
                didSwap = 1;
            }
        } 
        if (didSwap == 0){
            break;
        }
    } 
    // Now list the array as it currently is after sorting
    puts("\nHere is the list after the sort:");
    for (ctr = 0; ctr < 10; ctr++){
        printf("%d\n", nums[ctr]);
    }
    return 0;
}
```

---

# ตัวอย่าง 2

- <QRCode value="https://onlinegdb.com/oO0sq_7Yr" :size="200" render-as="svg"/>

- https://onlinegdb.com/oO0sq_7Yr

- การที่จะค้นหาค่าใน array เมื่อมีการ sort ก่อน จะทำให้ค้นหาได้เร็วขึ้น แต่ก็มีข้อเสียถ้า array มีขนาดใหญ่ จะทำให้โปรแกรมทำงานช้าลงถ้าต้องมีการ sort ทุกๆครั้งเมื่อโปรแกรมทำงาน

---

# Pointer variables

- Memory Addresses เปรียบเสมือนบ้าน แต่ละบ้านจะมีเลขที่บ้าน หรือ address เป็นของตัวเองไม่ซ้ำกัน
- เมื่อเรามามองในเชิงของโปรแกรม ตัวแปรที่เราสร้างขึ้นมาก็จะเก็บอยู่ใน memory ที่มีหมายเลขเฉพาะตัว
- ซึ่งการสร้าง Pointer Variables จะต้องมี Operator ดังรูป

![Pointer variables](/images/lab5/pointer-variables.png)

---
layout: two-cols
---

# การใช้งาน

- pointer variables สามารถใช้งานได้กับ data types หลากหลาย
- pointer variables `*` จะไว้ใช้สำหรับถือที่อยู่ของตัวแปรใน memory
- address-of operator `&` จะไว้ใช้สำหรับบอกตำแหน่งที่อยู่ของตัวแปรให้กับตัวแปร pointer อีกที

- ไม่ควรใช้ตัวแปร pointer ข้าม datatype กัน
- เครื่องหมาย `*` ไม่ใช่ส่วนหนึ่งของชื่อตัวแปร
```c
#include <stdio.h>
int main(){
    int age = 19;
    int * pAge = &age;
    return 0;
}
```

::right::

![pointer memory](/images/lab5/ex-pointer-memory.png)

---

# ตัวอย่าง

- เราอาจจะประกาศไว้ก่อนแล้วค่อย กำหนดค่าทีหลังก็ได้

```c
#include <stdio.h>
int main(){
    int age; // Defines a regular integer
    int * pAge; // Defines a pointer to an integer
    age = 19; // Stores 19 in age
    pAge = &age; // Links up the pointer
    return 0;
}
```

--- 
layout: two-cols
---

# การ Dereferencing *

- เป็นการเปลี่ยนค่า value ของตัวแปร pointer
- ถ้าต้องการเปลี่ยนค่า `age = 25;` สามารถทำได้ 2 วิธี

```c
#include <stdio.h>
int main(){
    int age;
    int * pAge;
    age = 19;
    pAge = &age;

    // First
    age = 25;
    printf("age = %d\npAge = %d\n", age, *pAge);
    // Or
    *pAge = 19;
    printf("age = %d\npAge = %d\n", age, *pAge);
    return 0;
}
```
::right::
- **OUTPUT**
```
age = 25
pAge = 25
age = 19
pAge = 19
```

---

# ตัวอย่าง

- https://onlinegdb.com/uEKhMoQpt

- **OUTPUT**

```
How many kids are you taking to the water park? 3

Do you have a discount ticket for the park?
Enter E for Employee Discount, S for Save-More Discount, or N for No Discount: E

First let's do it with the variables:
You've got 3 kids...
The employee discount saves you 25% on the $17.50 price
Total ticket cost: $39.38


Now let's do it with the pointers:
You've got 3 kidsdds...
The employee discount saves you 25% on the $17.50 price
Total ticket cost: $39.38
```

---
layout: two-cols
---

# Arrays and Pointers

- ตัวแปร Array เป็น pointer รูปแบบนึง ที่เรียกว่า pointer constants
- ซึ่งจะชี้ไปยังสมาชิกตัวแรกใน Array
- ไม่สามารถเปลี่ยนแปลงจำนวนของ Array ได้

```c
#include <stdio.h>
int main(){
    int vals[5] = {10, 20, 30, 40, 50};
    printf("The first value is %d.\n", vals[0]);
    // Or
    printf("The first value is %d.\n", *vals);
    // Or
    printf("The first value is %d.\n", *(vals+0));
    return 0;
}
```

::right::


```c
#include <stdio.h>
int main(){
    int vals[5] = {10, 20, 30, 40, 50};
    printf("The first value is %d.\n", vals[0]);
    printf("The second value is %d.\n", vals[1]);
    printf("The third value is %d.\n", vals[2]);
    printf("The fourth value is %d.\n", vals[3]);
    printf("The fifth value is %d.\n", vals[4]);
    // Or
    printf("The first value is %d.\n", *(vals+0));
    printf("The second value is %d.\n", *(vals+1));
    printf("The third value is %d.\n", *(vals+2));
    printf("The fourth value is %d.\n", *(vals+3));
    printf("The fifth value is %d.\n", *(vals+4));
    return 0;
}
```

---

# Characters and Pointers

- จากตัวอย่างบรรทัดแรก จะเรียกว่า pointer constant
- จากตัวอย่างบรรทัดสอง จะเรียกว่า pointer variable

```c
#include <stdio.h>
int main(){
    char name[] = "Andreew B. Mayfair"; /* name points to A */
    char * pName = "Andrew B. Mayfair"; /* pName points to A */
    return 0;
}
```

---

# Pointer variable

- pointer variable นี้คือ character pointer
- ซึ่ง character pointer นี้ สามารถเปลี่ยนค่าได้โดยไม่ต้องใช้ strcpy
- และยังสามารถใช้ string functions ได้อีกด้วย

```c
#include <stdio.h>
int main(){
    char * pName = "Andrew B. Mayfair"; /* pName points to A */
    pName = "Theodore M. Brooks";
    return 0;
}
```

---

# ข้อควรระวัง

- การกำหนด character pointer ไม่ได้มีข้อจำกัดในเรื่องของจำนวนตัวอักษรที่ชี้ไป แต่จะติดปัญหาเรื่องขนาดของพื้นที่ใน memory ที่ไม่ได้จองเอาไว้ล่วงหน้าได้
- ดังนั้นการใช้ array แบบกำหนดขนาดตัวอักษร ยังจะปลอดภัยกว่า

```c
#include <stdio.h>
int main(){
    char str[5] = "hi"; // You reserved space for 5 characters
    char * pStr = "hello";
    pStr = "a much longer string"; // May cause issues if allocated memory is limited.
    return 0;
}
```

---

# วิธีการแก้ปัญหา

```c
#include<stdio.h>
int main(){
    char input[81];
    char * iptr = input; // no need to use &input
    fgets(iptr, 81, stdin); /*Gets up to 80 chars and adds null zero */
    return 0;
}
```

---

# Arrays of Pointers

- https://onlinegdb.com/RH9Akgu3WV
- จากตัวอย่าง Code จะเห็นได้ว่า Array of Pointers ไม่ได้เก็บ strings แต่แค่ชี้ไปยัง strings อีกที

<div class="w-[500px] mx-auto">

![array of pointers](/images/lab5/arrays-of-pointer.png)
</div>

---
layout: two-cols
---

# Heap memory

- ตามปกติแล้วตัวแปรต่างๆจะถูกเก็บอยู่ใน stack ซึ่งมีพื้นที่จำกัด
- แต่เนื่องจากเวลาทำงานจริง ข้อมูลและจำนวนของตัวแปรมีขนาดไม่เท่ากัน ขึ้นอยู่กับตอนทำงานจริง ทำให้มีการใช้พื้นที่มากกว่าที่ stack จะรองรับได้

::right::

<div class="w-[170px] mx-auto">

![heap memory](/images/lab5/heap-memory.png)
</div>

---
layout: two-cols
---

# การใช้ malloc กับ free

- ถ้าต้องการสร้าง int 10 ตัว ต้องใช้ sizeof(int)
- (int *) คือ typecast หมายถึง pointer ของ int
- `free()` ไว้สำหรับคืนพื้นที่ใน memory

```c
##include <stdio.h>
#include <time.h>
#include <stdlib.h>
int main(){
    int * temps;
    time_t t;
    srand(time(&t));
    temps = (int *) malloc(10 * sizeof(int));
    for(int i=0;i<10;i++){
        int value = (rand() % 20)+1;
        temps[i] = value;
    }
    for(int i=0;i<10;i++){
        printf("Value = %d.\n", temps[i]);
    }
    free(temps);
    return 0;
}
```

::right::
# &nbsp;
```
Value = 13.
Value = 17.
Value = 7.
Value = 1.
Value = 15.
Value = 3.
Value = 18.
Value = 19.
Value = 1.
Value = 20.
```

---
layout: two-cols
---

# Dot operator vs. Structure pointer operator

- จะมีความต่างกันอยู่ดังนี้

```c
struct Person {
    char name[50];
    int age;
};
int main(){
    struct Person p1;
    // Accessing the 'age' member using the dot operator
    p1.age = 25;  
    return 0;
}
```

::right::

```c
struct Person {
    char name[50];
    int age;
};
int main(){

    struct Person *p2 = &p1;
    // Accessing the 'age' member
    //  using the structure pointer operator

    p2->age = 30;  
    return 0;
}
```
---
layout: two-cols
---

# การประยุกต์ใช้กับ Linked List

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct book {
    char name[100];
    struct book *next;
};

int main() {
    struct book *head = NULL; // Head of the linked list
    struct book *current = NULL;

    for (int i = 0; i < 5; i++) {
        
        struct book newBook;

        // Set the book name
        sprintf(newBook.name, "Book %d", i + 1);
        newBook.next = NULL;

```

::right::

```c
        // Add the book to the linked list
        if (head == NULL) {
            head = &newBook;
        } else {
            current->next = &newBook;
        }
        current = &newBook; // Move to the new last node
    }

    // Traverse and print the linked list
    printf("Books in the linked list:\n");
    struct book *temp = head;
    while (temp != NULL) {
        printf("%s\n", temp->name);
        temp = temp->next;
    }

    return 0;
}

```

- ตัวแปร newBook จะถูกทำลายทุกครั้ง ทำให้ head ชี้ไปผิดตัว เพราะตัวแปรจะถูกเก็บอยู่ใน stack memory
- ถ้าลองไปรันโปรแกรมจะเกิด infinite loop

---
layout: two-cols
---

# วิธีแก้ปัญหา

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct book {
    char name[100];
    struct book *next;
};

int main() {
    struct book *head = NULL; // Head of the linked list
    struct book *current = NULL;

    for (int i = 0; i < 5; i++) {
        // Dynamically allocate memory for a new book
        struct book *newBook = 
        (struct book *)malloc(sizeof(struct book));

        // Set the book name
        sprintf(newBook->name, "Book %d", i + 1);
        newBook->next = NULL;

```

::right::

```c

        // Add the book to the linked list
        if (head == NULL) {
            head = newBook;
        } else {
            current->next = newBook;
        }
        current = newBook; // Move to the new last node
    }

    // Traverse and print the linked list
    printf("Books in the linked list:\n");
    struct book *temp = head;
    while (temp != NULL) {
        printf("%s\n", temp->name);
        temp = temp->next;
    }

    // Free the allocated memory
    temp = head;
    while (temp != NULL) {
        struct book *toFree = temp;
        temp = temp->next;
        free(toFree);
    }

    return 0;
}

```

---

# ผลลัพธ์

```
Books in the linked list:
Book 1
Book 2
Book 3
Book 4
Book 5
```

---
layout: two-cols
---

# Doubly Linked List

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct book {
    char name[100];
    struct book *prev;
    struct book *next;
};

int main() {
    struct book *head = NULL; // Head of the linked list
    struct book *current = NULL;

    for (int i = 0; i < 5; i++) {
        // Dynamically allocate memory for a new book
        struct book *newBook = 
        (struct book *)malloc(sizeof(struct book));

        // Set the book name
        sprintf(newBook->name, "Book %d", i + 1);
        newBook->prev = current;
        newBook->next = NULL;

```

::right::

```c
        // Add the book to the linked list
        if (head == NULL) {
            head = newBook;
        } else {
            current->next = newBook;
        }
        current = newBook; // Move to the new last node
    }
    // Traverse and print the linked list
    printf("Books in the linked list:\n");
    struct book *temp = head;
    while (temp != NULL) {
        printf("current book %s,
        \ previous book name %s\n", 
        temp->name, temp->prev->name);
        temp = temp->next;
    }
    // Free the allocated memory
    temp = head;
    while (temp != NULL) {
        struct book *toFree = temp;
        temp = temp->next;
        free(toFree);
    }
    return 0;
}

```

---
layout: two-cols
---

# ตัวอย่าง 2

```c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
struct Car {
    char name[100];
    struct Car * next;
};
int main()
{
    int totalCars;
    // if not assign NULL it will initialzed
    struct Car *head = NULL, *current = NULL;
    printf("How many cars do you want? ");
    scanf(" %d", &totalCars);
    for(int i=0;i<totalCars;i++){
        struct Car * newCar = 
    (struct Car *)malloc(totalCars*sizeof(struct Car));
        sprintf(newCar->name, "Car %d", i+1);
        newCar->next = NULL;
        if(head == NULL){
            head = newCar;
        }else{
            current->next = newCar;
        }
```

::right::

```c

        current = newCar;
    }
    printf("Traversing Linked list of Car\n");
    struct Car * temp = head;
    while(temp!=NULL){
        printf("Car's name is %s\n", temp->name);
        temp = temp->next;
    }
    // free memory
    temp = head;
    while(temp!=NULL){
        struct Car * toFree = temp;
        temp = temp->next;
        free(toFree);
    }
    return 0;
}
```

---

# Files

- Files จะมีการเข้าถึงได้ 2 วิธี
    1. Sequential access file 
    2. Random access file

---

# กระบวนการจัดการไฟล์

![sequential access file](/images/lab5/sequential-access-file.png)

- ตัวอย่าง 

```c
#include<stdio.h>
int main(){
    FILE * fptr;
    fptr = fopen("cdata.txt", "w");
    
    // rest of the program

    // Always close files
    fclose(fptr); 
    return 0;
}
```

---

# ตัวอย่าง

- https://onlinegdb.com/-ezrNEgsk