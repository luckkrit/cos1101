---
title: Number Systems
transition: fade
---
# Number Systems 

---

# วัตถุประสงค์

- เข้าใจแนวคิดของระบบตัวเลข
- สามารถแยกแยะระหว่างเลขชนิดมีตำแหน่งและไม่มีตำแหน่ง
- สามารถอธิบายระบบเลขฐาน 2, 8, 10 และ 16
- สามารถแปลงเลขไปมาระหว่างฐานต่างๆ
- สามารถหาจำนวนหลักที่ต้องการในการนำเสนอเลข

---
layout: section
---

# 2.1 Number Systems

---

# 2.1 Number Systems

- ระบบตัวเลขคือการนำเสนอตัวเลขโดยใช้สัญลักษณ์ที่แตกต่างกัน
- การนำเสนอเลขอาจแตกต่างกันในระบบตัวเลขที่ไม่เหมือนกันแต่อาจมีความหมายถึงจำนวนเดียวกัน เช่น (2A)<sub>16</sub> , (52)<sub>8</sub> และ (42)<sub>10</sub> คือเลขจำนวนเดียวกัน
- เนื่องจากจำนวนสัญลักษณ์มีจำนวนจำกัดจึงอาจมีการนำสัญลักษณ์มาเขียนซ้ำในแต่ละหลักได้ เช่น (1232)<sub>10</sub>


---
layout: section
---

# 2.2 Positional Number Systems

---

# 2.2 Positional Number Systems

- ถึงแม้ว่าระบบตัวเลขจะถูกใช้มาเป็นเวลานานแต่ก็สามารถแบ่งได้เพียงสองประเภท คือ
    - เลขชนิดมีตำแหน่ง (Positional Number)
    - เลขชนิดไม่มีตำแหน่ง (Non-positional Number)
- ระบบตัวเลขที่ใช้ส่วนใหญ่จะเป็นชนิดมีตำแหน่ง

---

## ตัวอย่าง

- เลขที่นิยมใช้ในระบบคอมพิวเตอร์มีอยู่ 4 ระบบคือ
    - เลขฐาน (base) 10, 2, 8 และ 16

- การนำเสนอตัวเลขแทนด้วย เช่น $\pm 10.23$ ก็จะกลายเป็นสูตรด้านล่าง

$$
\pm(S_{K-1} \cdots S_2 S_1 S_0 \cdot S_{-1} S_{-2} \cdots S_{-L})_b
$$

- ซึ่งสูตรที่ว่านี้ จะมีค่าเท่ากับ 
$$
n = \pm \left( S_{K-1} \cdot b^{K-1} + \cdots + S_1 \cdot b^1 + S_0 \cdot b^0 + S_{-1} \cdot b^{-1} + S_{-2} \cdot b^{-2} + \cdots + S_{-L} \cdot b^{-L} \right)
$$

- จากสูตรด้านล่างถ้าให้ b คือ 10 (b คือเลขฐาน) และ (k คือลำดับ)
$$
(\pm 10.23)_b = \pm (1 \cdot b^1 + 0 \cdot b^0 + 2 \cdot b^{-1} + 3 \cdot b^{-2})
$$ 

---

# 2.2.1 The decimal system (base 10)

- เป็นกลุ่มของสัญลักษณ์ S={0,1,2,3,4,5,6,7,8,9}
- มีฐาน 𝑏=10 
- การนำเสนอตัวเลขแทนด้วย
$$
\pm(S_{K-1} \cdots S_2 S_1 S_0 \cdot S_{-1} S_{-2} \cdots S_{-L})_b
$$
- เช่น +(552.23)<sub>10</sub> ซึ่งอาจเขียนให้ง่ายได้ว่า 552.23

---

# เลขจำนวนเต็ม (Integer)

- สนใจเฉพาะส่วนที่ไม่มีเลขทศนิยม
- สามารถคำนวนค่าได้จาก
$$
N = \pm \left( S_{K-1} \cdot 10^{K-1} + S_{K-2} \cdot 10^{K-2} + \cdots + S_2 \cdot 10^2 + S_1 \cdot 10^1 + S_0 \cdot 10^0 \right)
$$

- นั่นก็คือ

$$
-7508 = -(7 \times 10^3 + 5 \times 10^2 + 0 \times 10^1 + 8 \times 10^0) \\
= -(7 \times 1000 + 5 \times 100 + 0 \times 10 + 8 \times 1)
$$

---

# เลขจำนวนจริง (Reals)

- สนใจเลขที่มีทั้งจำนวนเต็มและทศนิยม
- สามารถคำนวนค่าได้จาก

$$
R = \pm \left( S_{K-1} \times 10^{K-1} + \ldots + S_1 \times 10^1 + S_0 \times 10^0 + S_{-1} \times 10^{-1} + \ldots + S_{-L} \times 10^{-L} \right)
$$

- เช่น

$$
+24.13 = +(2 \times 10^1 + 4 \times 10^0 + 1 \times 10^{-1} + 3 \times 10^{-2}) \\
= +(2 \times 10 + 4 \times 1 + 1 \times 0.1 + 3 \times 0.01)
$$

---

- ใช้ค่า K เพื่อหา Maximum Value
$$
N_{\max} = 10^K - 1
$$

- เช่น

$$ {1|2|3|all}
\begin{aligned}
N_{\max} = 10^4 - 1 \\
= 10000 - 1 \\
= 9999
\end{aligned}
$$

---

# 2.2.2 The binary system (base 2)

- เป็นกลุ่มของสัญลักษณ์ S={0,1}
- มีฐาน 𝑏=2 
- การนำเสนอตัวเลขแทนด้วย
$$
{\pm(S_{K-1} \ldots S_2 \, S_1 \, S_0 \cdot S_{-1} \, S_{-2} \ldots S_{-L})}_2
$$
- เช่น +(101.11)<sub>2</sub> ซึ่งอาจเขียนให้ง่ายได้ว่า 101.11<sub>2</sub>

---

# เลขจำนวนเต็ม (Integer)

- สนใจเฉพาะส่วนที่ไม่มีเลขทศนิยม
- สามารถคำนวนค่าได้จาก

$$
N = \pm \left( S_{K-1} \times 2^{K-1} + S_{K-2} \times 2^{K-2} + \ldots 
+ S_2 \times 2^2 + S_1 \times 2^1 + S_0 \times 2^0 \right)
$$

- เช่น

$$
(11001)_2 = (1 \times 2^4 + 1 \times 2^3 + 0 \times 2^2 + 0 \times 2^1 + 1 \times 2^0) \\
= (1 \times 16 + 1 \times 8 + 0 \times 4 + 0 \times 2 + 1 \times 1) \\
= 16 + 8 + 0 + 0 + 1 = 25
$$

---

# เลขจำนวนจริง (Reals)

- สนใจเลขที่มีทั้งจำนวนเต็มและทศนิยม

- สามารถคำนวนค่าได้จาก

$$
R = \pm \left( S_{K-1} \times 2^{K-1} + \ldots + S_1 \times 2^1 + S_0 \times 2^0 
+ S_{-1} \times 2^{-1} + \ldots + S_{-L} \times 2^{-L} \right)
$$

- เช่น

$$
(101.11)_2 = (1 \times 2^2 + 0 \times 2^1 + 1 \times 2^0 + 1 \times 2^{-1} + 1 \times 2^{-2}) \\
= (1 \times 4 + 0 \times 2 + 1 \times 1 + 1 \times 0.5 + 1 \times 0.25) \\
= 4 + 0 + 1 + 0.5 + 0.25 = 5.75
$$

---

- ใช้ค่า K เพื่อหา Maximum Value

$$
N_{\max} = 2^K - 1
$$

- เช่น

$$ {1|2|3|all}
\begin{aligned}
N_{\max} = 2^5 - 1 \\
= 32 - 1 \\
= 31
\end{aligned}
$$

---

# 2.2.3 The hexadecimal system (base16)

- ถึงแม้ว่าเลขฐาน 2 จะถูกเก็บในคอมพิวเตอร์ แต่มันก็ยังไม่สะดวกในการอธิบายเท่าเลขฐาน 10 
- ในทางกลับกันเลขฐานเลขฐาน 10 ก็ไม่สามารถบอกได้ว่าจะถูกเก็บในคอมพิวเตอร์เป็นเลขฐาน 2 โดยตรงได้อย่างไร
- ไม่มีความสัมพันธ์ที่ชัดเจนระหว่างจำนวนบิตในเลขฐานสองกับจำนวนหลักในเลขฐานสิบ
- ถ้าจะต้องมานั่งแปลงจากฐาน 10 เป็นฐาน 2 และจากฐาน 2 เป็นฐาน 10 ก็จะช้ามาก 
- เพื่อแก้ไขปัญหาดังกล่าว ได้มีการคิดค้นระบบเลขแบบมีตำแหน่ง (positional systems) ขึ้นมาสองระบบ คือ 

- <span v-mark.underline>ระบบฐานสิบหก (hexadecimal)</span> และ

- <span v-mark.underline>ระบบฐานแปด (octal)</span>
-  โดยเราจะพูดถึงระบบฐานสิบหกก่อน เนื่องจากเป็นที่นิยมมากกว่า

---

- เป็นกลุ่มของสัญลักษณ์ S={0,1,2,3,4,5,6,7,8,9,𝐴,𝐵,𝐶,𝐷,𝐸,𝐹}
- มีฐาน 𝑏=16 
- การนำเสนอตัวเลขแทนด้วย

$$
{\pm(S_{K-1} \ldots S_2 \, S_1 \, S_0 \cdot S_{-1} \, S_{-2} \ldots S_{-L})}_{16}
$$

- เช่น

$$
+(4\mathrm{B}.\mathrm{E}2)_{16}  
$$

-  ซึ่งอาจเขียนให้ง่ายได้ว่า 

$$
4\mathrm{B}.\mathrm{E}2_{16}
$$

---

# เลขจำนวนเต็ม

- สนใจเฉพาะส่วนที่ไม่มีเลขทศนิยม
- สามารถคำนวนค่าได้จาก

$$
N = \pm \left( S_{K-1} \times 16^{K-1} + S_{K-2} \times 16^{K-2} + \ldots 
+ S_2 \times 16^2 + S_1 \times 16^1 + S_0 \times 16^0 \right)
$$

- เช่น

$$ {1|2|3|4|all}
\begin{aligned}
(2\mathrm{AE})_{16} = (2 \times 16^2 + \mathrm{A} \times 16^1 + \mathrm{E} \times 16^0) \\
= (2 \times 256 + \mathrm{A} \times 16 + \mathrm{E} \times 1) \\
= (2 \times 256 + 10 \times 16 + 14 \times 1) \\
= 512 + 160 + 14 = 686
\end{aligned}
$$

---

# เลขจำนวนจริง (Reals)

- สนใจเลขที่มีทั้งจำนวนเต็มและทศนิยม
- สามารถคำนวนค่าได้จาก

$$
R = \pm \left( S_{K-1} \times 16^{K-1} + \ldots + S_1 \times 16^1 + S_0 \times 16^0 
+ S_{-1} \times 16^{-1} + \ldots + S_{-L} \times 16^{-L} \right)
$$

- เช่น

$$ {1|2|3|4|all}
\begin{aligned}
(4\mathrm{B}.\mathrm{E}2)_{16} = (4 \times 16^1 + \mathrm{B} \times 16^0 + \mathrm{E} \times 16^{-1} + 2 \times 16^{-2}) \\
= (4 \times 16 + \mathrm{B} \times 1 + \mathrm{E} \times 0.0625 + 2 \times 0.00390625) \\
= (4 \times 16 + 11 \times 1 + 14 \times 0.0625 + 2 \times 0.00390625) \\
= 64 + 11 + 0.875 + 0.0078125 = 75.8828125
\end{aligned}
$$

---

- ใช้ค่า K เพื่อหา Maximum Value

$$
N_{\max} = 16^K - 1
$$

- เช่น 

$$
N_{\max} = 16^3 - 1 = 4095
$$

---

# 2.2.4 The octal system (base8)

- เป็นกลุ่มของสัญลักษณ์ S={0,1,2,3,4,5,6,7}

- มีฐาน 𝑏=8 

- การนำเสนอตัวเลขแทนด้วย

$$
{\pm(S_{K-1} \ldots S_2 \, S_1 \, S_0 \cdot S_{-1} \, S_{-2} \ldots S_{-L})}_{8}
$$

- เช่น

$$
+(64.73)_{8}  
$$

-  ซึ่งอาจเขียนให้ง่ายได้ว่า 

$$
64.73_{8}
$$

---

# เลขจำนวนเต็ม (Integer)

- สนใจเฉพาะส่วนที่ไม่มีเลขทศนิยม

- สามารถคำนวนค่าได้จาก

$$
N = \pm \left( S_{K-1} \times 8^{K-1} + S_{K-2} \times 8^{K-2} + \ldots 
+ S_2 \times 8^2 + S_1 \times 8^1 + S_0 \times 8^0 \right)
$$

- เช่น

$$ {1|2|3|all}
\begin{aligned}
(1256)_{8} = (1 \times 8^3 + 2 \times 8^2 + 5 \times 8^1 + 6 \times 8^0) \\
= (1 \times 512 + 2 \times 64 + 5 \times 8 + 6 \times 1) \\
= 512 + 128 + 40 + 6 = 686
\end{aligned}
$$

---

# เลขจำนวนจริง (Reals)

- สนใจเลขที่มีทั้งจำนวนเต็มและทศนิยม
- สามารถคำนวนค่าได้จาก

$$
R = \pm \left( S_{K-1} \times 8^{K-1} + \ldots + S_1 \times 8^1 + S_0 \times 8^0 
+ S_{-1} \times 8^{-1} + \ldots + S_{-L} \times 8^{-L} \right)
$$

- เช่น 

$$
(64.73)_{8} = (6 \times 8^1 + 4 \times 8^0 + 7 \times 8^{-1} + 3 \times 8^{-2}) \\
= (6 \times 8 + 4 \times 1 + 7 \times 0.125 + 3 \times 0.015625) \\
= 48 + 4 + 0.875 + 0.046875 = 52.921875
$$

---

- ใช้ค่า K เพื่อหา Maximum Value

$$
N_{\max} = 8^K - 1
$$

- เช่น 

$$
N_{\max} = 8^4 - 1 \\
= 4096 - 1 \\
= 4095
$$


---

# 2.2.5 Summary of the four positional systems
## (สรุประบบตัวเลขทั้ง 4 แบบ)

|System|Base|Symbols|Examples|
|:-:|:-:|:-:|:-:|
|Decimal|10|0,1,2,3,4,5,6,7,8,9|2345.56|
|Binary|2|0,1|(1001.11)<sub>2</sub>|
|Octal|8|0,1,2,3,4,5,6,7|(156.23)<sub>8</sub>|
|Hexadecimal|16|0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F|(A2C.A1)<sub>16</sub>|

---
layout: two-cols
---

### Part 1: Numbers 0-7

| Decimal | Binary | Octal | Hexadecimal |
|---------|--------|-------|-------------|
| 0       | 0      | 0     | 0           |
| 1       | 1      | 1     | 1           |
| 2       | 10     | 2     | 2           |
| 3       | 11     | 3     | 3           |
| 4       | 100    | 4     | 4           |
| 5       | 101    | 5     | 5           |
| 6       | 110    | 6     | 6           |
| 7       | 111    | 7     | 7           |

::right::

### Part 2: Numbers 8-15

| Decimal | Binary | Octal | Hexadecimal |
|---------|--------|-------|-------------|
| 8       | 1000   | 10    | 8           |
| 9       | 1001   | 11    | 9           |
| 10      | 1010   | 12    | A           |
| 11      | 1011   | 13    | B           |
| 12      | 1100   | 14    | C           |
| 13      | 1101   | 15    | D           |
| 14      | 1110   | 16    | E           |
| 15      | 1111   | 17    | F           |

---

# 2.2.6 Conversion

- การแปลงระหว่างระบบเลขฐานที่ควรศึกษามีทั้งหมด 5 ลักษณะคือ
    1. การแปลงจากเลขฐานอื่น (2,8,16) ไปเป็นเลขฐาน 10
    2. การแปลงจากเลขฐาน 10 ไปเป็นเลขฐานอื่น (2,8,16)
    3. การแปลงระหว่างเลขฐาน 2 กับเลขฐาน 16
    4. การแปลงระหว่างเลขฐาน 2 กับเลขฐาน 8
    5. การแปลงระหว่างเลขฐาน 8 กับเลขฐาน 16

---

# 1. Any base to decimal conversion 
## (การแปลงจากเลขฐานอื่น (2,8,16) ไปเป็นเลขฐาน 10)

- การแปลงจากระบบเลขฐานใดๆ ให้เป็นระบบเลขฐาน 10 สามารถทำได้ง่ายโดยวิธีการกระจายเลขตามสูตร

$$
R = \pm \left( S_{K-1} \times b^{K-1} + \ldots + S_1 \times b^1 + S_0 \times b^0 
+ S_{-1} \times b^{-1} + S_{-2} \times b^{-2} + \ldots + S_{-L} \times b^{-L} \right)
$$

- ตัวอย่างที่ 1 

$$
(110.11)_2 = 1 \times 2^2 + 1 \times 2^1 + 0 \times 2^0 + 1 \times 2^{-1} + 1 \times 2^{-2} \\
= 4 + 2 + 0 + 0.5 + 0.25 = 6.75
$$

- ตัวอย่างที่ 2

$$
(1\mathrm{A}.23)_{16} = 1 \times 16^1 + \mathrm{A} \times 16^0 + 2 \times 16^{-1} + 3 \times 16^{-2} \\
= 1 \times 16 + 10 \times 1 + 2 \times 0.0625 + 3 \times 0.00390625 \\
= 16 + 10 + 0.125 + 0.01171875 = 26.13671875
$$

---

- ตัวอย่างที่ 3

$$
(23.17)_8 = 2 \times 8^1 + 3 \times 8^0 + 1 \times 8^{-1} + 7 \times 8^{-2} \\
= 2 \times 8 + 3 \times 1 + 1 \times 0.125 + 7 \times 0.015625 \\
= 16 + 3 + 0.125 + 0.109375 = 19.234375
$$

---

# 2. Decimal to any base
## การแปลงจากเลขฐาน 10 ไปเป็นเลขฐานอื่น (2,8,16)

<div class="w-[400px] mx-auto my-3">

![decimal to any base](/images/chapter2/decimal_to_any_base.png)
</div>

<v-switch>
  <template #0>
    <DecimalToAny step="0" number="35" />
  </template>
  <template #1>
    <DecimalToAny step="1" number="35" />
  </template>
  <template #2>
    <DecimalToAny step="2" number="35" />
  </template>
  <template #3>
    <DecimalToAny step="3" number="35" />
  </template>
  <template #4>
    <DecimalToAny step="4" number="35" />
  </template>
  <template #5>
    <DecimalToAny step="5" number="35" />
  </template>
  <template #6>
    <DecimalToAny step="6" number="35" />
  </template>
</v-switch>

---

- จงแปลง (41)<sub>10</sub> เป็นฐาน 2

<v-switch>
  <template #0>
    <DecimalToAny step="0" number="41" />
  </template>
  <template #1>
    <DecimalToAny step="1" number="41" />
  </template>
  <template #2>
    <DecimalToAny step="2" number="41" />
  </template>
  <template #3>
    <DecimalToAny step="3" number="41" />
  </template>
  <template #4>
    <DecimalToAny step="4" number="41" />
  </template>
  <template #5>
    <DecimalToAny step="5" number="41" />
  </template>
  <template #6>
    <DecimalToAny step="6" number="41" />
  </template>
</v-switch>

---

- จงแปลง (22)<sub>10</sub> เป็นฐาน 2

<v-switch>
  <template #0>
    <DecimalToAny step="0" number="22" />
  </template>
  <template #1>
    <DecimalToAny step="1" number="22" />
  </template>
  <template #2>
    <DecimalToAny step="2" number="22" />
  </template>
  <template #3>
    <DecimalToAny step="3" number="22" />
  </template>
  <template #4>
    <DecimalToAny step="4" number="22" />
  </template>
  <template #5>
    <DecimalToAny step="5" number="22" />
  </template>
</v-switch>

---

- จงแปลง (175)<sub>10</sub> เป็นฐาน 2
<v-switch>
  <template #0>
    <DecimalToAny step="0" number="175" />
  </template>
  <template #1>
    <DecimalToAny step="1" number="175" />
  </template>
  <template #2>
    <DecimalToAny step="2" number="175" />
  </template>
  <template #3>
    <DecimalToAny step="3" number="175" />
  </template>
  <template #4>
    <DecimalToAny step="4" number="175" />
  </template>
  <template #5>
    <DecimalToAny step="5" number="175" />
  </template>
  <template #6>
    <DecimalToAny step="6" number="175" />
  </template>
  <template #7>
    <DecimalToAny step="7" number="175" />
  </template>
  <template #8>
    <DecimalToAny step="8" number="175" />
  </template>
</v-switch>

---


- จงแปลง (3886)<sub>10</sub> เป็นฐาน 8

<v-switch>
  <template #0>
    <DecimalToAny step="0" number="3886" base="8" />
  </template>
  <template #1>
    <DecimalToAny step="1" number="3886" base="8"/>
  </template>
  <template #2>
    <DecimalToAny step="2" number="3886" base="8"/>
  </template>
  <template #3>
    <DecimalToAny step="3" number="3886" base="8" />
  </template>
  <template #4>
    <DecimalToAny step="4" number="3886" base="8"/>
  </template>
</v-switch>

---

- จงแปลง (154)<sub>10</sub> เป็นฐาน 16

<v-switch>
  <template #0>
    <DecimalToAny step="0" number="154" base="16" />
  </template>
  <template #1>
    <DecimalToAny step="1" number="154" base="16"/>
  </template>
  <template #2>
    <DecimalToAny step="2" number="154" base="16"/>
  </template>
</v-switch>

---

# Converting the fractional part
## ส่วนทศนิยม


<div class="flex justify-center gap-3">
<div class="w-[500px]">

![Fractional part](/images/chapter2/fraction_converter.png)
</div>
<div>

<div class="underline">การแปลงทศนิยม</div>

- ทำได้โดยการคูณเลขหลังจุดทศนิยมด้วยฐานที่ต้องการ
- แปลงจนเลขหลังจุดทศนิยมเป็นศูนย์ หรือเท่าจำนวนที่ต้องการ 
- แล้วนำเลขหน้าจุดที่ได้จากการคูณมาเรียงหลังจุดทศนิยมตั้งแต่ตัวที่ 1 เป็นต้นไป 

</div>
</div>


<v-switch>
  <template #0>
    <FractionToAny step="0" number="0.625" base="2"/>
  </template>
  <template #1>
    <FractionToAny step="1" number="0.625" base="2"/>
  </template>
  <template #2>
    <FractionToAny step="2" number="0.625" base="2"/>
  </template>
  <template #3>
    <FractionToAny step="3" number="0.625" base="2"/>
  </template>
</v-switch>

---

- จงแปลง (0.75)<sub>10</sub> เป็นฐาน 2

<v-switch>
  <template #0>
    <FractionToAny step="0" number="0.75" base="2"/>
  </template>
  <template #1>
    <FractionToAny step="1" number="0.75" base="2"/>
  </template>
  <template #2>
    <FractionToAny step="2" number="0.75" base="2"/>
  </template>
</v-switch>

---

- จงแปลง (0.75)<sub>10</sub> เป็นฐาน 8

<v-switch>
  <template #0>
    <FractionToAny step="0" number="0.75" base="8"/>
  </template>
  <template #1>
    <FractionToAny step="1" number="0.75" base="8"/>
  </template>
</v-switch>

---

- จงแปลง (0.75)<sub>10</sub> เป็นฐาน 16

<v-switch>
  <template #0>
    <FractionToAny step="0" number="0.75" base="16"/>
  </template>
  <template #1>
    <FractionToAny step="1" number="0.75" base="16"/>
  </template>
</v-switch>

---


- จงแปลง (0.67)<sub>10</sub> เป็นฐาน 2 และต้องการทศนิยม 5 ตำแหน่ง

<v-switch>
  <template #0>
    <FractionToAny step="0" number="0.67" base="2"/>
  </template>
  <template #1>
    <FractionToAny step="1" number="0.67" base="2"/>
  </template>
  <template #2>
    <FractionToAny step="2" number="0.67" base="2"/>
  </template>
  <template #3>
    <FractionToAny step="3" number="0.67" base="2"/>
  </template>
  <template #4>
    <FractionToAny step="4" number="0.67" base="2"/>
  </template>
  <template #5>
    <FractionToAny step="5" number="0.67" base="2"/>
  </template>
</v-switch>

---

- จงแปลง (0.67)<sub>10</sub> เป็นฐาน 8 และต้องการทศนิยม 5 ตำแหน่ง

<v-switch>
  <template #0>
    <FractionToAny step="0" number="0.67" base="8"/>
  </template>
  <template #1>
    <FractionToAny step="1" number="0.67" base="8"/>
  </template>
  <template #2>
    <FractionToAny step="2" number="0.67" base="8"/>
  </template>
  <template #3>
    <FractionToAny step="3" number="0.67" base="8"/>
  </template>
  <template #4>
    <FractionToAny step="4" number="0.67" base="8"/>
  </template>
  <template #5>
    <FractionToAny step="5" number="0.67" base="8"/>
  </template>
</v-switch>

---

- จงแปลง (0.67)<sub>10</sub> เป็นฐาน 16 และต้องการทศนิยม 5 ตำแหน่ง

<v-switch>
  <template #0>
    <FractionToAny step="0" number="0.67" base="16"/>
  </template>
  <template #1>
    <FractionToAny step="1" number="0.67" base="16"/>
  </template>
  <template #2>
    <FractionToAny step="2" number="0.67" base="16"/>
  </template>
  <template #3>
    <FractionToAny step="3" number="0.67" base="16"/>
  </template>
  <template #4>
    <FractionToAny step="4" number="0.67" base="16"/>
  </template>
  <template #5>
    <FractionToAny step="5" number="0.67" base="16"/>
  </template>
</v-switch>

---

- จงแปลง (13.75)<sub>10</sub> เป็นฐาน 2 

<v-switch>
  <template #0>
<div>

- เริ่มจาก 13
</div>
    <DecimalToAny step="0" number="13" />
  </template>
  <template #1>
<div>

- เริ่มจาก 13
</div>
    <DecimalToAny step="1" number="13" />
  </template>
  <template #2>
<div>

- เริ่มจาก 13
</div>
    <DecimalToAny step="2" number="13" />
  </template>
  <template #3>
<div>

- เริ่มจาก 13
</div>
    <DecimalToAny step="3" number="13" />
  </template>
  <template #4>
<div>

- เริ่มจาก 13
</div>
    <DecimalToAny step="4" number="13" />
  </template>
  <template #5>
<div>

- เริ่มจาก 13
</div>
    <DecimalToAny step="4" number="13" />
<div>

- แล้วต่อด้วย 0.75
</div>
    <FractionToAny step="0" number="13.75" base="2"/>
  </template>
  <template #6>
<div>

- เริ่มจาก 13
</div>
    <DecimalToAny step="4" number="13" />
<div>

- แล้วต่อด้วย 0.75
</div>
    <FractionToAny step="1" number="13.75" base="2"/>
  </template>
  <template #7>
<div>

- เริ่มจาก 13
</div>
    <DecimalToAny step="4" number="13" />
<div>

- แล้วต่อด้วย 0.75
</div>
    <FractionToAny step="2" number="13.75" base="2"/>
<div>

- ผลลัพธ์จึงเป็น 1101.11
</div>
  </template>
</v-switch>



---

# Binary - Hexadecimal conversion
## 3. การแปลงระหว่างเลขฐาน 2 กับเลขฐาน 16

<div class="w-[400px] mx-auto">

![Binary - Hexadecimal](/images/chapter2/binary_hexadecimal.png)
</div>

- แบ่งเลขฐานสองออกเป็น กลุ่ม ๆ ละ 4 ตัว โดยเริ่มจากทางขวามือ

---

- จงแปลง 1110011100110<sub>2</sub> เป็นฐาน 16

<BinaryToAny input="1110011100110" from="2" to="16" chunkFrom="4" chunkTo="1" />

---

- จงแปลง 11000101101.011<sub>2</sub> เป็นฐาน 16

<BinaryToAny input="11000101101.011" from="2" to="16" chunkFrom="4" chunkTo="1" />

---

- จงแปลง (8A9)<sub>16</sub> เป็นฐาน 2

<BinaryToAny input="8A9" from="16" to="2" chunkFrom="1" chunkTo="4" />

---

- จงแปลง (89E0.5F)<sub>16</sub> เป็นฐาน 2

<BinaryToAny input="89E0.5F" from="16" to="2" chunkFrom="1" chunkTo="4" />
---

- ลองทำ แปลงระหว่าง 2 &harr; 16

    1. (101110010)<sub>2</sub>
    2. (100111001.00111)<sub>2</sub>
    3. (45.5)<sub>16</sub>
    4. (A5.E)<sub>2</sub>

---

1. (101110010)<sub>2</sub>

<BinaryToAny input="101110010" from="2" to="16" chunkFrom="4" chunkTo="1" />


2. (100111001.00111)<sub>2</sub>

<BinaryToAny input="100111001.00111" from="2" to="16" chunkFrom="4" chunkTo="1" />

---

3. (45.5)<sub>16</sub>

<BinaryToAny input="45.5" from="16" to="2" chunkFrom="1" chunkTo="4" />

4. (A5.E)<sub>16</sub>

<BinaryToAny input="A5.E" from="16" to="2" chunkFrom="1" chunkTo="4" />

---

# Binary - Octal conversion
## 4. การแปลงระหว่างเลขฐาน 2 กับเลขฐาน 8

<div class="w-[400px] mx-auto">

![Binary - Octal](/images/chapter2/binary_octal.png)
</div>

- แบ่งเลขฐานสองออกเป็น กลุ่ม ๆ ละ 3 ตัว โดยเริ่มจากทางขวามือ

---

- จงแปลง (10111110000)<sub>2</sub> เป็นฐาน 8

<BinaryToAny input="10111110000" from="2" to="8" chunkFrom="3" chunkTo="1" />

---

- จงแปลง (110010.1101)<sub>2</sub> เป็นฐาน 8

<BinaryToAny input="110010.1101" from="2" to="8" chunkFrom="3" chunkTo="1" />

---

- จงแปลง (11110.101)<sub>2</sub> เป็นฐาน 8

<BinaryToAny input="11110.101" from="2" to="8" chunkFrom="3" chunkTo="1" />

---

- จงแปลง (543)<sub>8</sub> เป็นฐาน 2

<BinaryToAny input="543" from="8" to="2" chunkFrom="1" chunkTo="3" />

---

- จงแปลง (456.02)<sub>8</sub> เป็นฐาน 2

<BinaryToAny input="456.02" from="8" to="2" chunkFrom="1" chunkTo="3" />

---

- ลองทำ แปลงระหว่าง 2 &harr; 8
  1. (101110010)<sub>2</sub>
  2. (100111001.00111)<sub>2</sub>
  3. (45.5)<sub>8</sub>
  4. (125.74)<sub>8</sub>

---

1. (101110010)<sub>2</sub>

<BinaryToAny input="101110010" from="2" to="8" chunkFrom="3" chunkTo="1" />

2. (100111001.00111)<sub>2</sub>

<BinaryToAny input="100111001.00111" from="2" to="8" chunkFrom="3" chunkTo="1" />

---

3. (45.5)<sub>8</sub>

<BinaryToAny input="45.5" from="8" to="2" chunkFrom="1" chunkTo="3" />

4. (125.74)<sub>8</sub>

<BinaryToAny input="125.74" from="8" to="2" chunkFrom="1" chunkTo="3" />

---

# 5. การแปลงระหว่างเลขฐาน 8 กับเลขฐาน 16

<div class="w-[400px] mx-auto">

![Octal - Hex](/images/chapter2/octal_hex.png)
</div>

1. แปลงฐาน 8 เป็น ฐาน 2

<BinaryToAny input="4116" from="8" to="2" chunkFrom="1" chunkTo="3" />

2. นำผลลัพธ์จากข้อ 1. มาแปลงเป็นฐาน 16

<BinaryToAny input="100001001110" from="2" to="16" chunkFrom="4" chunkTo="1" />


---

<!-- - แปลง (4116)<sub>8</sub> เป็นฐาน 16 -->

<OctalToHex input="4116" from="8" to="16" />

---

- แปลง (472.35)<sub>8</sub> เป็นฐาน 16

<OctalToHex input="472.35" from="8" to="16"  />

---

- จงแปลง (8C3.7)<sub>16</sub>เป็นฐาน 8

<OctalToHex input="8C3.7" from="16" to="8"  />

---

- ลองทำ แปลงระหว่าง 8 &harr; 16

1. (4116)<sub>8</sub> แปลงเป็นฐาน 16
2. (1F0)<sub>16</sub> แปลงเป็นฐาน 8

---

1. (4116)<sub>8</sub> แปลงเป็นฐาน 16

<OctalToHex input="4116" from="8" to="16"  />

---


2. (1F0)<sub>16</sub>

<OctalToHex input="1F0" from="16" to="8"  />

---

# Number of digits
## จำนวนหลักที่ใช้ 


- ก่อนที่จะทำการแปลงเลขฐาน 10 ไปเป็นฐานใด ๆ เราควรจะต้องรู้ก่อนว่าจำนวนหลักของเลขฐานปลายทางจะมีจำนวนกี่หลัก ซึ่งสามารถหาได้จากสูตร 

$$
K = \lceil \log_b N \rceil
$$

- โดยที่

  - 𝐾 คือจำนวนหลักของเลขปลายทาง  

  - 𝑏 คือฐานของเลขปลายทาง

  - 𝑁 คือเลขฐาน 10 ต้นทาง

---

# ตัวอย่าง

- ถ้าเรารู้เลขฐานที่จะแปลงแน่ๆแล้ว เช่น เรามีเลข 234 ฐาน 10 อยู่ ถ้าจะแปลงเป็น ฐาน 2 จะได้กี่หลัก

- $\lceil\log_2 234\rceil = 7.8 \rightarrow 8$ หลัก

- แต่ปัญหาคือ $\lceil\log_2 8\rceil$ จะได้ 3 หลัก เมื่อเราแปลง 8 เป็นฐาน 2 จะได้ 1000 จึงไม่พอ ดังนั้นถ้าจะใช้ให้ถูกต้อง N+1 เข้าไป

$$
\left\lceil \log_2 (N+1) \right\rceil \\
\left\lceil \log_2 (8+1) \right\rceil = \left\lceil \log_2 (9) \right\rceil \\
\approx \left\lceil 3.17 \right\rceil \\
= 4 \quad \text{หลัก ถึงจะพอดี}
$$

---

- แต่ถ้าเราไม่รู้ว่าเลขของเราคือเลขอะไรแน่ๆ แต่รู้ว่าเป็นฐาน 10 และมีจำนวน 3 หลัก ถ้าแปลงเป็นฐาน 2 จะได้กี่หลักที่น้อยที่สุดกี่หลัก
- สามารถหาได้จากสูตร


$$
x = \left\lceil K_{b_s} \times \left(\frac{\log b_s}{\log b_d}\right) \right\rceil
$$

- โดยที่

$$
\begin{aligned}
    K_{b_s}: คือจำนวนหลักของเลขต้นทาง \\
    b_s: คือฐานของเลขต้นทาง \\
    x: คือจำนวนหลักของเลขปลายทาง \\
    b_d: คือฐานของเลขปลายทาง
\end{aligned}
$$

---

- ดังนั้น

$$
\begin{align*}
x &= \left\lceil K_{b_s} \times \left( \frac{\log b_s}{\log b_d} \right) \right\rceil \\
x &= \left\lceil 3 \times \left( \frac{\log 10}{\log 2} \right) \right\rceil \\
x &= \left\lceil 3 \times \left( \frac{1}{0.30103} \right) \right\rceil \\
x &= \left\lceil 3 \times 3.32192 \right\rceil \\
x &= \left\lceil 9.96576 \right\rceil = 10
\end{align*}
$$