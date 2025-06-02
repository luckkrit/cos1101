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

---

2. โดยแบบที่สอง การดำเนินการ circular shift (หรือ rotate operation) เป็นการเลื่อนบิต แต่ไม่มีบิตใดสูญหายหรือถูกเพิ่มเข้ามา
    - Circular right shift (หรือ right rotate) เลื่อนแต่ละบิตหนึ่งตำแหน่งไปทางขวา บิตขวาสุดจะหมุนเวียนกลับไปกลายเป็นบิตซ้ายสุด
    - Circular left shift (หรือ left rotate) เลื่อนแต่ละบิตหนึ่งตำแหน่งไปทางซ้าย บิตซ้ายสุดจะหมุนเวียนกลับไปกลายเป็นบิตขวาสุด

<div class="w-[500px] mx-auto">

![Circular shift](/images/chapter4/circular_shift.png)
</div>

---

<div class="w-[400px] mx-auto">

![Arithmetic Shift right](/images/chapter4/arithmetic_shift_right.png)
</div>

<div class="w-[400px] mx-auto">

![Arithmetic Shift Left](/images/chapter4/arithmetic_shift_left.png)
</div>


<div class="w-[400px] mx-auto">

![Arithmetic shift overflow](/images/chapter4/arithmetic_shift_overflow.png)
</div>

---

# ตัวอย่าง

- ใช้การดำเนิน circular left shift กับ bit pattern 10011000

<BitOperation input="10011000" base="2" operation="CIRCULAR_SHIFTING" shift="L1"/>

- ใช้การดำเนิน circular right shift กับ bit pattern 10011000

<BitOperation input="10011000" base="2" operation="CIRCULAR_SHIFTING" shift="R1"/>

---

# Arithmetic shift operations

- การดำเนินการ Arithmetic shift สมมติว่าบิตแพทเทิร์นเป็นจำนวนเต็มที่มีเครื่องหมายในรูปแบบ two's complement การ Arithmetic right shift ใช้เพื่อหารจำนวนเต็มด้วยสอง ในขณะที่การ Arithmetic left shift ใช้เพื่อคูณจำนวนเต็มด้วยสอง (จะกล่าวถึงในภายหลัง) 
- การดำเนินการเหล่านี้ไม่ควรเปลี่ยนบิตเครื่องหมาย (บิตซ้ายสุด) การ Arithmetic right shift จะคงบิตเครื่องหมายไว้ แต่ยังคัดลอกไปยังบิตถัดไปทางขวา เพื่อให้เครื่องหมายคงอยู่ การ Arithmetic left shift จะทิ้งบิตเครื่องหมายและรับบิตที่อยู่ทางซ้ายของบิตเครื่องหมายเป็นเครื่องหมายใหม่ หากบิตเครื่องหมายใหม่เหมือนกับบิตเดิม การดำเนินการจะสำเร็จ มิฉะนั้นจะเกิด overflow หรือ underflow และผลลัพธ์จะไม่ถูกต้อง

<div class="w-[500px] mx-auto">

![Arithmetic Shift](/images/chapter4/arithmetic_shift.png)
</div>

---


# ลองทำ

- ให้ใช้การดำเนินการ arithmetic right shift กับบิตแพทเทิร์น 10011001 โดยแพทเทิร์นนี้เป็นจำนวนเต็มในรูปแบบ two's complement
    - Original : -103
    - After shift : -52

<ArithmeticPatternOperation input="10011001" base="2" shift="1R" operation="ARITHMETIC"/>

---

- ให้ใช้การดำเนินการ arithmetic left shift กับบิตแพทเทิร์น 11011001 โดยแพทเทิร์นนี้เป็นจำนวนเต็มในรูปแบบ two's complement
    - Original : -39
    - After shift : -78

<ArithmeticPatternOperation input="11011001" base="2" shift="1L" operation="ARITHMETIC"/>
---

- ให้ใช้การดำเนินการ arithmetic left shift กับบิตแพทเทิร์น 01111111 โดยแพทเทิร์นนี้เป็นจำนวนเต็มในรูปแบบ two's complement
    - Original : 127
    - After shift : -2
    - เกิด Overflow เพราะ 127 x 2 = 254 

<ArithmeticPatternOperation input="01111111" base="2" shift="1L" operation="ARITHMETIC"/>

---

- 10001101 (-115 ฐานสิบ) จัดเก็บลง 8 Bit patterns memory ในรูปแบบ Two’s complement  ถ้านำมาดำเนินการด้วย Arithmetic right shift จะมีค่าเท่าใด 
    - Original : -115
    - After shift : $\left\lfloor \frac{-115}{2} \right\rfloor = \lfloor -57.5 \rfloor = -58$

<ArithmeticPatternOperation input="10001101" base="2" shift="1R" operation="ARITHMETIC"/>

---
layout: section
---

# 4.3 Artihmetic Operations

---

# Addition and Subtraction for two’s complement integer

- จำนวนเต็มที่มีค่าเป็นลบ จะถูกเก็บอยู่ในคอมพิวเตอร์รูป two's complement 
- ถ้าเราต้องการหาว่าจำนวนเต็ม 2 ตัวมาลบกัน ในทางคอมพิวเตอร์จะทำได้อย่างไร เพราะคอมพิวเตอร์เก็บเป็น two's complement ?

$$
A - B \leftrightarrow A + (\overline{B} + 1) \\
\text{Where } (\overline{B} + 1) \text{ means the two's complement of } B
$$

- ตัว $\overline{B}$ คือ One's complement ดังนั้น $(\overline{B} + 1)$  คือ Two's complement
- จากสมการด้านบน หมายความว่า การที่จำนวนเต็ม 2 จำนวนเต็มจะลบกัน แต่ถ้าอยู่ในรูป two's complement เราสามารถใช้การบวกแทนได้


---

# วิธีการบวกเลขฐาน 2 ขนาด 1 bit

- การบวกเลขฐาน 2 ขนาด 1 บิต หมายถึงการบวกตัวเลขฐานสองที่มีแค่หลักเดียว (0 หรือ 1) สองตัวเข้าด้วยกัน ซึ่งมีกฎพื้นฐานอยู่ 4 ข้อดังนี้:

**หลักการบวกเลขฐาน 2 ขนาด 1 บิต:**

1.  **$0 + 0 = 0$**
    * ถ้าบวก 0 กับ 0 ผลลัพธ์คือ 0 และไม่มีตัวทด (carry)

2.  **$0 + 1 = 1$**
    * ถ้าบวก 0 กับ 1 ผลลัพธ์คือ 1 และไม่มีตัวทด

---

3.  **$1 + 0 = 1$**
    * ถ้าบวก 1 กับ 0 ผลลัพธ์คือ 1 และไม่มีตัวทด

4.  **$1 + 1 = 0 \text{ ทด } 1$ (หรือเขียนเป็น $10_2$)**
    * ถ้าบวก 1 กับ 1 ผลลัพธ์ในหลักนั้นคือ 0 และ **มีตัวทด (carry-out)** ไปยังหลักถัดไปทางซ้าย 1

---

**ตารางสรุปผลลัพธ์ (Truth Table) สำหรับการบวก 1 บิต:**

เราสามารถแสดงผลลัพธ์ในรูปของตารางได้ดังนี้ โดยมีคอลัมน์สำหรับผลรวม (Sum) และตัวทด (Carry)

| Bit A | Bit B | Sum (ผลรวม) | Carry (ตัวทด) |
| :---- | :---- | :---------- | :------------ |
| 0     | 0     | 0           | 0             |
| 0     | 1     | 1           | 0             |
| 1     | 0     | 1           | 0             |
| 1     | 1     | 0           | 1             |

**คำอธิบายเพิ่มเติม:**

* **ผลรวม (Sum):** คือค่าบิตในตำแหน่งที่เรากำลังบวก
* **ตัวทด (Carry):** คือค่าบิตที่ต้องส่งไปบวกเพิ่มในหลักถัดไปทางซ้ายมือ (เหมือนกับการบวกเลขฐานสิบที่เราทดไปหลักสิบ หลักร้อย)

---

**ความสัมพันธ์กับวงจรดิจิทัล (Half Adder):**

การบวกเลขฐาน 2 ขนาด 1 บิตนี้เป็นพื้นฐานของวงจรดิจิทัลที่เรียกว่า **Half Adder** (ฮาล์ฟแอดเดอร์) ซึ่งเป็นวงจรที่รับอินพุต 2 บิต (A และ B) และให้เอาต์พุต 2 ค่าคือ:

* **Sum (S):** ได้จากเกท XOR (Exclusive OR) ของ A และ B ($S = A \oplus B$)
* **Carry-out (Cout):** ได้จากเกท AND ของ A และ B ($Cout = A \text{ AND } B$)

นี่คือพื้นฐานที่สุดของการบวกเลขในระบบดิจิทัล ซึ่งจะนำไปสร้างเป็นวงจรที่ซับซ้อนขึ้นเพื่อบวกเลขฐานสองที่มีหลายๆ บิตต่อไป

---

# ตัวอย่าง

- จำนวนเต็มสองจำนวน A และ B ถูกจัดเก็บในรูปแบบส่วนเติมเต็มของสอง (Two's Complement) จงแสดงวิธีการบวก B เข้ากับ A โดย A = (00010001)<sub>2</sub> และ B = (00010110)<sub>2</sub>

- การดำเนินการคือการบวก โดย A ถูกนำไปบวกกับ B และผลลัพธ์จะถูกเก็บไว้ใน R: (+17) + (+22) = (+39)

<BitAddition input="00010001" input2="00010110" />


---


- จำนวนเต็มสองจำนวน A และ B ถูกจัดเก็บในรูปแบบส่วนเติมเต็มของสอง (Two's Complement) จงแสดงวิธีการบวก B เข้ากับ A โดย A = (00011000)<sub>2</sub> และ B = (11101111)<sub>2</sub>

- การดำเนินการคือการบวก โดย A ถูกนำไปบวกกับ B และผลลัพธ์จะถูกเก็บไว้ใน R: (+24) + (-17) = (+7) 
- โปรดเข้าใจไวด้วยว่า บิต carry สุดท้าย จะถูกละไว้ เพราะเกินจำนวน 8 บิต

<BitAddition input="00011000" input2="11101111" />

---


- จำนวนเต็มสองจำนวน A และ B ถูกจัดเก็บในรูปแบบส่วนเติมเต็มของสอง (Two's Complement) จงแสดงวิธีการลบ B ออกจาก A โดย A = (00011000)<sub>2</sub> และ B = (11101111)<sub>2</sub>

- การดำเนินการคือการลบ โดย B ถูกนำไปลบกับ A และผลลัพธ์จะถูกเก็บไว้ใน R: (+24) - (-17) = (+41) 

<BitAddition input="00011000" input2="00010001" labelB="2's complement(B)"/>

---

- จำนวนเต็มสองจำนวน A และ B ถูกจัดเก็บในรูปแบบส่วนเติมเต็มของสอง (Two's Complement) จงแสดงวิธีการลบ B ออกจาก A โดย A = (11011101)<sub>2</sub> และ B = (00010100)<sub>2</sub>

- การดำเนินการคือการลบ โดย B ถูกนำไปลบกับ A และผลลัพธ์จะถูกเก็บไว้ใน R: (-35) - (+20) = (-55) 
- โปรดเข้าใจไวด้วยว่า บิต carry สุดท้าย จะถูกละไว้ เพราะเกินจำนวน 8 บิต

<BitAddition input="11011101" input2="11101100" labelB="2's complement(B)"/>

---


- จำนวนเต็มสองจำนวน A และ B ถูกจัดเก็บในรูปแบบส่วนเติมเต็มของสอง (Two's Complement) จงแสดงวิธีการบวก B เข้ากับ A โดย A = (01111111)<sub>2</sub> และ B = (00000011)<sub>2</sub>

- การดำเนินการคือการบวก โดย A ถูกนำไปบวกกับ B และผลลัพธ์จะถูกเก็บไว้ใน R: (127) + (3) = (130) แต่คำตอบที่ถูกต้องคือ -126 ที่ error เพราะว่ามัน overflow (+130) ไม่อยู่ในช่วงของ -128 ถึง +127

<BitAddition input="01111111" input2="00000011" />