---
title: Operations on Data
transition: fade
---

# Operations on Data 

---

# วัตถุประสงค์

- สามารถอธิบายการดำเนินการกับข้อมูลทั้ง 3 ชนิดได้
- รู้จักการดำเนินการบน bit patterns แบบ unary และ binary
- แยกแยะความแตกต่างระหว่าง logic shift operations และ arithmetic shift operations
- เข้าใจการบวกและลบจำนวนเต็มที่เก็บในรูปแบบ 2’s complement
- เข้าใจการประยุกต์ใช้ของ logic operations และ shift operations

---

# การดำเนินการกับข้อมูล

- การดำเนินการกับข้อมูลมี 3 ชนิด คือ
    - Logic Operations
    - Shift Operations
    - Arithmetic Operations

---
layout: section
---

# 4.1 Logical operations

---

# การดำเนินการทางตรรกศาสตร์

- แต่ละบิทของข้อมูลจะมีเพียงสองค่าคือ 0 กับ 1 (0 คือ False และ 1 คือ True)
- ในการดำเนินการกับบิทของข้อมูลระหว่างตัวเลข 2 ชุด จะใช้ตารางความจริง (Truth Table) ในการนิยามผลลัพธ์ที่เกิดขึ้น
- ตัวอย่าง

<div class="flex justify-center">
    <div class="grid grid-cols-2 border justify-items-center">
        <div>
            Operation:
        </div>
        <div>
            A + B
        </div>
        <div>
            Operator: 
        </div>
        <div>
        +
        </div>
        <div>
            Operand: 
        </div>
        <div>
        A, B
        </div>
    </div>
</div>


---
layout: two-cols
---

# 4.1.1 Logic operations at bit level

1. NOT - Unary operator
2. AND - Binary operator
3. OR - Binary operator
4. XOR - Binary operator

![Operators](/images/chapter4/operator.png)

::right::

<div class="w-[500px] mx-auto p-3">

![Truth table](/images/chapter4/truth_table.png)

</div>

---

# 4.1.2 Logic operations at pattern level

<div class="w-[500px] mx-auto">

![Pattern Level](/images/chapter4/patterns_level.png)
</div>

## ตัวอย่าง

1. ใช้ NOT กับ bit pattern 10011000

<BitPatternOperation input="10011000" output="01100111" operation="NOT"/>

---

2. ใช้ AND กับ bit pattern 10011000 กับ 00101010

<BitPatternOperation input="10011000" input2="00101010" output="00001000" operation="AND"/>

3. ใช้ OR กับ bit pattern 10011001 กับ 00101110

<BitPatternOperation input="10011001" input2="00101110" output="10111111" operation="OR"/>

---

5. ใช้ XOR กับ bit pattern 10011001 กับ 00101110

<BitPatternOperation input="10011001" input2=" 00101110" output="10110111" operation="OR"/>

---

# ลองทำ

1. NOT (98)<sub>16</sub>
2. NOT (91)<sub>16</sub>
3. (98)<sub>16</sub> AND (91)<sub>16</sub>
4. (98)<sub>16</sub> OR (91)<sub>16</sub>
5. (98)<sub>16</sub> XOR (91)<sub>16</sub>
6. NOT [(98)<sub>16</sub> AND (91)<sub>16</sub>]
7. (98)<sub>16</sub> OR [NOT (91)<sub>16</sub>]

---

# เฉลย

1. NOT (98)<sub>16</sub>
    -  (98<sub>16</sub>) = {{ parseInt("98",16).toString(2).padStart(8,"0") }}

<BitOperation input="98" base="16" operation="NOT"/>

2. NOT (91)<sub>16</sub>
    -  (91<sub>16</sub>) = {{ parseInt("91",16).toString(2).padStart(8,"0") }}

<BitOperation input="91" base="16" operation="NOT"/>

---

3. (98)<sub>16</sub> AND (91)<sub>16</sub>
    -  (98<sub>16</sub>) = {{ parseInt("98",16).toString(2).padStart(8,"0") }}
    -  (91<sub>16</sub>) = {{ parseInt("91",16).toString(2).padStart(8,"0") }}

<BitOperation input="98" input2="91" base="16" operation="AND"/>

---

4. (98)<sub>16</sub> OR (91)<sub>16</sub>
    -  (98<sub>16</sub>) = {{ parseInt("98",16).toString(2).padStart(8,"0") }}
    -  (91<sub>16</sub>) = {{ parseInt("91",16).toString(2).padStart(8,"0") }}

<BitOperation input="98" input2="91" base="16" operation="OR"/>

---

5. (98)<sub>16</sub> XOR (91)<sub>16</sub>
    -  (98<sub>16</sub>) = {{ parseInt("98",16).toString(2).padStart(8,"0") }}
    -  (91<sub>16</sub>) = {{ parseInt("91",16).toString(2).padStart(8,"0") }}

<BitOperation input="98" input2="91" base="16" operation="XOR"/>

---

6. NOT [(98)<sub>16</sub> AND (91)<sub>16</sub>]
    -  (98<sub>16</sub>) = {{ parseInt("98",16).toString(2).padStart(8,"0") }}
    -  (91<sub>16</sub>) = {{ parseInt("91",16).toString(2).padStart(8,"0") }}

6.1 ทำในวงเล็บก่อน จะได้ 10010000 หรือ (90<sub>16</sub>)

<BitOperation input="98" input2="91" base="16" operation="AND"/>

6.2 NOT [(90)<sub>16</sub>]

<BitOperation input="90" base="16" operation="NOT"/>

---

7. (98)<sub>16</sub> OR [NOT (91)<sub>16</sub>]
    -  (98<sub>16</sub>) = {{ parseInt("98",16).toString(2).padStart(8,"0") }}
    -  (91<sub>16</sub>) = {{ parseInt("91",16).toString(2).padStart(8,"0") }}

7.1 ทำในวงเล็บก่อน จะได้ 01101110 หรือ (6E<sub>16</sub>)

<BitOperation input="91" base="16" operation="NOT"/>

7.2 NOT [(90)<sub>16</sub>]

<BitOperation input="98" input2="6E" base="16" operation="OR"/>

---

# Applications (การประยุกต์ใช้)

- จาก Operator ทั้ง 4 ชนิด NOT, AND, OR, XOR สามารถแบ่งการประยุกต์ใช้ได้ตามชนิดของ Operator ดังนี้

<div class="grid grid-cols-2">

<div>

1. Unary Operator
    - Complementing (NOT)

</div>
<div></div>
<div>

2. Binary Operator
    - Unsetting (AND)
    - Setting (OR)
    - Flipping (XOR)
</div>
<div class="w-[200px]">

![Binary Mask](/images/chapter4/binary_mask.png)
</div>

</div>

---

1. Complementing (NOT)

<BitPatternOperation input="10011000" output="01100111" operation="NOT"/>

---

2. Unsetting (AND)

- ใช้ mask เพื่อลบ (clear) 5 บิตซ้ายสุดของ pattern และทดสอบ mask นี้กับ pattern 10100110
    - mask ก็คือ 00000111
<BitOperation input="10100110" input2="00000111" base="2" operation="UNSETTING" mask="L5"/>

---

3. Setting (OR)

- ใช้ mask เพื่อตั้งค่า (set) 5 บิตซ้ายสุดของ pattern และทดสอบ mask นี้กับ pattern 10100110
    - mask ก็คือ 11111000
<BitOperation input="10100110" input2="11111000" base="2" operation="SETTING" mask="L5"/>

---

4. Flipping (XOR)

- ใช้ mask เพื่อกลับค่า (flip) 5 บิตซ้ายสุดของ pattern และทดสอบ mask นี้กับ pattern 10100110
    - mask ก็คือ 11111000
<BitOperation input="10100110" input2="11111000" base="2" operation="FLIPPING" mask="L5"/>

---

# ลองทำ

1. จงบอก Mask และตัวดำเนินการทางตรรกะ (Logical operator) ที่ใช้สำหรับ Setting บิตซ้ายสุดห้าบิต ของ input 01001101 
2. จงบอก Mask และตัวดำเนินการทางตรรกะ (Logical operator) ที่ใช้สำหรับ Unsetting บิตซ้ายสุดห้าบิต ของ input 01001101 
3. จงบอก Mask และตัวดำเนินการทางตรรกะ (Logical operator) ที่ใช้สำหรับ Flipping บิตซ้ายสุดห้าบิต ของ input 01001101 

---

# เฉลย


1. จงบอก Mask และตัวดำเนินการทางตรรกะ (Logical operator) ที่ใช้สำหรับ Setting บิตซ้ายสุดห้าบิต ของ input 01001101 
    - mask ก็คือ 11111000
    - ใช้ OR operator

<BitOperation input="01001101" input2="11111000" base="2" operation="SETTING" mask="L5"/>

---

2. จงบอก Mask และตัวดำเนินการทางตรรกะ (Logical operator) ที่ใช้สำหรับ Unsetting บิตซ้ายสุดห้าบิต ของ input 01001101 
    - mask ก็คือ 00000111
    - ใช้ AND operator

<BitOperation input="01001101" input2="00000111" base="2" operation="UNSETTING" mask="L5"/>

---

3. จงบอก Mask และตัวดำเนินการทางตรรกะ (Logical operator) ที่ใช้สำหรับ Flipping บิตซ้ายสุดห้าบิต ของ input 01001101 
    - mask ก็คือ 11111000
    - ใช้ XOR operator

<BitOperation input="01001101" input2="11111000" base="2" operation="FLIPPING" mask="L5"/>


---
layout: section
---

# 4.2 Shift operations

---

# Shift operations

- แบ่งออกเป็น 2 ประเภท
    1. Logical shift operations

        1.1 Simple shift

        1.2 Circular shift

    2. Arithmetic shift operations

---

# 4.2.1 Logical shift operations

- การใช้ Logical shift จะไม่ใช้กับ pattern ของ bits ที่ต้องการแสดงค่า sign (+/-) เหตุผลเพราะเวลา shift เกิดขึ้นจะสูญเสียหลักซ้ายสุดไป

1. โดยแบบแรกที่เราจะพูดถึงก็คือ Simple shift หรือ shift แบบง่าย
    - การดำเนินการ right shift แบบง่าย จะเลื่อนแต่ละบิตหนึ่งตำแหน่งไปทางขวา ในรูปแบบ n-bit นั้น บิตขวาสุดจะหายไป และ 0 จะเติมเข้ามาที่บิตซ้ายสุด
    - การดำเนินการ left shift แบบง่าย จะเลื่อนแต่ละบิตหนึ่งตำแหน่งไปทางซ้าย ในรูปแบบ n-bit นั้น บิตซ้ายสุดจะหายไป และ 0 จะเติมเข้ามาที่บิตขวาสุด

จากรูปข้างล่างแสดงถึงการ left/right shift แบบง่ายของ 8-bit pattern

<div class="w-[500px] mx-auto">

![Simple Shift](/images/chapter4/simple_shift.png)
</div>

---

# ตัวอย่าง

- ใช้การดำเนินการ left shift แบบง่ายกับ bit pattern 10011000


<BitOperation input="10011000" base="2" operation="SHIFTING" shift="L1"/>

- ใช้การดำเนินการ right shift แบบง่ายกับ bit pattern 10011000

<BitOperation input="10011000" base="2" operation="SHIFTING" shift="R1"/>