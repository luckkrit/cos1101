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

- ไม่ได้สอน
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