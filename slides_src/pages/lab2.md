---
title: Lab 2 - Basic C Programming Language
---

# Lab 2 - Basic C Programming Language

---

# รูปแบบของโปรแกรมที่จะเรียนในวิชานี้

<div class="flex justify-between">
<div class="text-center border border-2 border-green-500 p-2">
<img src="/images/lab2/cli.png" class="h-[200px] shadow-md shadow-slate-500/50 mb-2">
1. Command Line <material-symbols:check class="text-green-500"/> 
</div>
<div class="text-center border border-2 border-red-500 p-2">
<img src="/images/lab2/gui.png" class="h-[200px] shadow-md shadow-slate-500/50 mb-2">
2. Graphical User Interface <material-symbols:close class="text-red-500"/> 

</div>
</div>

---

# โครงสร้างโปรแกรมภาษา C

1. Preprocessor Directive
2. Main Function
3. Statement

```c {all|1|3,6|4-5}
#include <stdio.h> // 1. Preprocessor Directive

int main(){  // 2. Main Function
    printf("Hello World!"); // 3. Statement
    return 0; // Statement
}
```

# OUTPUT ??

<v-clicks>

```

Hello World

```

</v-clicks>

---
layout: two-cols
---

# Example 

- [https://onlinegdb.com/AD3bU_HX0](https://onlinegdb.com/AD3bU_HX0)


- <QRCode value="https://onlinegdb.com/AD3bU_HX0" :size="200" render-as="svg"/>

- กดปุ่ม <div class="bg-green-500 px-2 py-1 w-14 inline"><material-symbols-open-in-new /> Fork</div>

::right::

# โจทย์ 1

1. ลองเปลี่ยนจาก Hello World เป็น Hello Student!
    - เปลี่ยนเสร็จแล้วกดปุ่ม <div class="bg-green-500 px-2 py-1 w-14 inline"><material-symbols-play-arrow-rounded /> Run</div>


```c
#include <stdio.h> 

int main(){  
    printf("Hello Student!"); 
    return 0;
}
```

2. ลองเปลี่ยนจาก Hello World เป็นรหัสนักศึกษา
    - เปลี่ยนเสร็จแล้วกดปุ่ม <div class="bg-green-500 px-2 py-1 w-14 inline"><material-symbols-play-arrow-rounded /> Run</div>

```c
#include <stdio.h> 

int main(){  
    printf("46270304"); // Student Id 
    return 0;
}
```

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

- ไม่ได้สอนในวิชานี้

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

# ฟังก์ชันหลักของโปรแกรม (Main Function)


<div class="border border-yellow-500 p-2 w-fit"> ⚠ ทุกโปรแกรมต้องมี มี โดยโปรแกรมหลักจะเริ่มต้นด้วย main() และตามด้วยเครื่องหมาย

 ปีกกาเปิด `{` และปีกกาปิด `}`

```c
int main()
{
    return 0;
}
```
</div>

- แต่ละคำสั่ง (Statement) จะต้องจบด้วยเซมิโคลอน `;` (Semicolon)
- ต้องมี return 0; เสมอ และต้องใส่เลขจำนวนเต็ม เช่น 0 = Success , 1 = Failure 

```c
return 0; // Success
return 1; // Failure
```

---

# ฟังก์ชั่นพิมพ์ข้อความบนหน้าจอ (printf)


- เป็นคำสั่งที่ใช้ในการแสดงผลออกทางจอภาพ โดยมีรูปแบบการใช้งานดังนี้
    - control หรือ format string
         เป็นส่วนที่ใส่ข้อความที่จะแสดงผล และส่วนควบคุมลักษณะการแสดงผล รวมทั้งบอกตำแหน่งที่ตัวแปรจะแสดงผล
    
    - variable list
         เป็นตัวแปรที่ต้องการจะแสดงผล ในกรณีที่ต้องการแสดงข้อความ 
    ไม่จำเป็นต้องมีส่วนนี้

```c
printf("ข้อความ หรือ control หรือ format string", variable list );

```

---

# Example 2

```c
#include <stdio.h> 

int main(){  
    printf("Hello Ramkamhaeng University"); 
    printf("Department of Computer Science"); 
    return 0;
}
```


# OUTPUT

```
Hello Ramkamhaeng UniversityDepartment of Computer Science
```

- จะให้ข้อความไม่ติดกันแบบนี้จะทำยังไง?

```
Hello Ramkamhaeng University
Department of Computer Science
```


---

# การใช้อักขระควบคุมการแสดงผล


<div class="flex gap-3">

<div>

- คำสั่ง `printf( )` สามารถควบคุมการแสดงผล ด้วยอักขระที่มี backslash นำหน้า

<div class="grid grid-cols-4 border divide-x divide-y w-96">
<div class="p-2">\n</div>
<div class="col-span-3 p-2">ขึ้นบรรทัดใหม่</div>
<div class="p-2">\t</div>
<div class="col-span-3 p-2">เว้นระยะ 1 tab</div>
<div class="p-2">\\</div>
<div class="col-span-3 p-2">แสดง \</div>
<div class="p-2">\"</div>
<div class="col-span-3 p-2">แสดง "</div>
</div> 

</div>

<div>

- CODE

```c
#include <stdio.h>
int main(){
    printf("Hello Ramkamhaeng University\n");
    printf("Department of Computer Science");
    return 0;
}

```

- OUTPUT
```
Hello Ramkamhaeng University
Department of Computer Science
```

</div>

</div>

---
layout: two-cols
---


# Example 

- [https://onlinegdb.com/AD3bU_HX0](https://onlinegdb.com/AD3bU_HX0)


- <QRCode value="https://onlinegdb.com/AD3bU_HX0" :size="200" render-as="svg"/>

- กดปุ่ม <div class="bg-green-500 px-2 py-1 w-14 inline"><material-symbols-open-in-new /> Fork</div>

::right::

# โจทย์ 2

- เขียนโปรแกรมให้แสดงข้อความดังนี้ (เอาให้ใกล้เคียง ไม่ต้องเป๊ะมาก)

```
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\\  Hello, Krit Chomaitong  \\
\\  Ramkamhaeng University  \\
\\  Computer Science        \\
\\  "46270304"              \\
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
```
