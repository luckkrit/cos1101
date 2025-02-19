---
title: Algorithm
---

# Algorithm 

---
layout: section
---

# Computational Thinking

---
layout: two-cols
---

การคิดเชิงคอมพิวเตอร์ (Computational Thinking) เป็นรูปแบบการคิดเชิงวิเคราะห์ เป็นระบบ มีเหตุผล และเป็นขั้นเป็นตอน โดยทักษะนี้ต้องอาศัยองค์ประกอบ 4 อย่าง ได้แก่

1. การย่อยปัญหาหรือสรุปปัญหา (Decomposition)
2. การจดจำรูปแบบต่าง ๆ (Pattern Recognition)
3. วิเคราะห์ความคิดในแบบนามธรรม (Abstraction)
4. การออกแบบอัลกอริทึม (Algorithm Design)

::right::

<div class="text-center font-bold text-2xl">Computational Thiking</div>

![Computational Thinking](/images/chapter8/computational_thinking.png)

[https://www.bbc.co.uk/bitesize/guides/zp92mp3/revision/1](https://www.bbc.co.uk/bitesize/guides/zp92mp3/revision/1)


---
layout: two-cols
---

# การย่อยปัญหาหรือสรุปปัญหา (Decomposition)

- จินตนาการว่าคุณกำลังวางแผนการเดินทางไปเปรโต๊ะลอซู

- สิ่งใดบ้างที่คุณจะต้องวางแผนเพื่อเดินทางจากบ้านเกิดของคุณไปยังเปรโต๊ะลอซู

::right::


![waterfall](/images/chapter8/waterfall.png)


[https://www.klukfoontour.com/petolosu2024](https://www.klukfoontour.com/petolosu2024)


---
layout: two-cols
---

# การย่อยปัญหาหรือสรุปปัญหา (Decomposition)

- สามารถเริ่มแบ่งปัญหาออกเป็นส่วนย่อย ๆ ได้ ดังนี้:
1. ใช้ยานพาหนะประเภทใดในการเดินทางจากบ้านเกิดไปจังหวัดตาก
2. เดินทางจากตากไปเปรโต๊ะลอซูอย่างไร
3. ต้องจองตั๋วอะไรบ้าง?

::right::

```mermaid

flowchart TD

    A[ทริปไปเปรโต๊ะลอซู] --> B[การเดินทาง]
    A --> C[ตั๋ว]
    B --> D[บ้านเกิดไปตาก]
    B --> E[ตากไปเปรโต๊ะลอซู]

```

---
layout: two-cols
---


# Pattern Recognition หรือ การจดจำรูปแบบ 

- คือ หนึ่งในองค์ประกอบสำคัญของแนวคิดเชิงคำนวณ (Computational Thinking) ที่ช่วยให้เราสามารถระบุ กำหนด และใช้รูปแบบที่ซ้ำซากหรือลักษณะเฉพาะที่เกิดขึ้นในข้อมูล เพื่อนำไปสู่การแก้ปัญหาหรือการตัดสินใจที่ชาญฉลาด

- วิธีที่พบได้บ่อยที่สุดคือซูโดกุ การหารูปแบบในตารางขนาดเล็กแล้วจึงค้นหาในตารางขนาดใหญ่ ซูโดกุช่วยให้คุณพัฒนาทักษะการคิดคำนวณได้ โดยให้ความสำคัญกับการจดจำรูปแบบมากที่สุด

::right::

<div class="text-center font-bold text-2xl">Sudoku</div>

![sudoku](/images/chapter8/sudoku.png)
---
layout: two-cols
---

# Abstraction

- คือกระบวนการลบข้อมูลที่ไม่จำเป็นออกและมุ่งเน้นไปที่รายละเอียดที่สำคัญ 
วิธีนี้ช่วยให้คุณมีแนวคิดทั่วไปเกี่ยวกับปัญหาและวิธีแก้ไขปัญหา

ตัวอย่างที่ดีของการทำนามธรรมคือการใช้แผนที่ แผนที่จะรวมเฉพาะข้อมูลที่เกี่ยวข้องเท่านั้น
แผนที่ถนนในปารีสในตัวอย่างนี้ประกอบด้วยถนน แม่น้ำ และชื่อสถานที่สำคัญ
แผนที่นี้ไม่ได้รวมรายละเอียดที่ชัดเจนว่าอาคารต่างๆ มีลักษณะเป็นอย่างไรในชีวิตจริง

::right::

<div class="w-[380px]">

![Paris Map](/images/chapter8/paris_map.png)
</div>

---
layout: two-cols
---

# Abstraction

- นอกจากนี้ ยังมีระดับของการแยกส่วนที่แตกต่างกันซึ่งมีวัตถุประสงค์การใช้งานที่แตกต่างกัน
แผนที่รถไฟใต้ดินปารีสมีการลบรายละเอียดออกไปอีก โดยแสดงเฉพาะเส้นทาง สถานี และแม่น้ำเท่านั้น

::right::

<div class="w-[380px]">

![Paris Map](/images/chapter8/paris_map.png)
![Paris Map2](/images/chapter8/paris_map2.png)
</div>

---
layout: two-cols
---

# Algorithm

- การคิดเชิงอัลกอริทึมคือกระบวนการพัฒนาอัลกอริทึมเพื่อแก้ปัญหา 
- อัลกอริทึม (Algorithm) คือ ชุดคำสั่งหรือขั้นตอนที่ชัดเจนและเป็นลำดับขั้นตอนในการแก้ปัญหาหนึ่งๆ โดยสามารถนำไปปฏิบัติตามได้ทั้งโดยมนุษย์หรือคอมพิวเตอร์ หรือทั้งสองอย่างร่วมกัน

ตัวอย่าง
- ขั้นตอนที่ 1: เดินทางไปยังสถานีรถไฟฟ้าสายสีเหลืองสถานีหัวหมาก
- ขั้นตอนที่ 2: ซื้อตั๋วรถไฟฟ้าไปยังสถานีลาดพร้าว 
- ขั้นตอนที่ 3: ขึ้นรถไฟฟ้าสายสีเหลืองมุ่งหน้าไปสถานีลาดพร้าว 

::right::

<div class="text-center font-bold text-2xl">วัดอรุณ</div>

![Arun Temple](/images/chapter8/arun_temple.png)
---
layout: two-cols
---

- ขั้นตอนที่ 4: ถึงสถานีลาดพร้าว ให้เปลี่ยนสายรถไฟฟ้าจากสายสีเหลืองไปเป็นสายสีน้ำเงินสถานีพหลโยธิน
- ขั้นตอนที่ 5: ซื้อตั๋วรถไฟฟ้าไปยังสถานีอิสรภาพ
- ขั้นตอนที่ 6: ขึ้นรถไฟฟ้าสายสีน้ำเงินมุ่งหน้าไปยังสถานีอิสรภาพ
- ขั้นตอนที่ 7: ลงรถไฟฟ้าที่สถานีอิสรภาพ
- ขั้นตอนที่ 8: เดินทางไปยังวัดอรุณจากสถานีอิสรภาพ มีหลายวิธีในการเดินทางไปวัดอรุณ เช่น 
    1. เดิน: ใช้เวลาประมาณ 20-30 นาที
    2. เรียกรถแท็กซี่: ใช้เวลาประมาณ 10 นาที

::right::

<div class="text-center font-bold text-2xl">วัดอรุณ</div>

![Arun Temple](/images/chapter8/arun_temple.png)


---
layout: section
---

# Concept (แนวคิดเบื้องต้น)

---
layout: two-cols
---

# 1. นิยามอย่างไม่เป็นทางการ

- “อัลกอริธึม” คือระเบียบวิธีหรือขั้นตอนที่มีจุดเริ่มต้นและจุดสิ้นสุดในการแก้ปัญหาหรือทำงานอย่างใดอย่างหนึ่ง
ตามนิยามนี้ อัลกอริธึมเป็นขั้นตอนการแก้ปัญหาที่เป็นอิสระต่อระบบและภาษาคอมพิวเตอร์ ถ้าจะให้นิยามที่กระชับมากขึ้นอาจเราอาจระบุได้ว่า อัลกอริธึมจะรับรายการข้อมูลนำเข้าและสร้างรายการผลลัพธ์

::right::

<div class="text-center font-bold text-2xl">นิยามของอัลกอริธึมที่ใช้ในคอมพิวเตอร์</div>


![Algorithm in computer](/images/chapter8/algorithm_in_computer.png)

---
layout: two-cols
---

# 2. ตัวอย่าง

- การค้นหาเลขจำนวนเต็มที่มากที่สุด

- โจทย์: สมมติว่าเราต้องการออกแบบอัลกอริธึมเพื่อหาเลขจำนวนเต็มที่มากที่สุดในกลุ่มของเลขจำนวนเต็มบวกที่กำหนดให้  อัลกอริธึมจะต้องไม่ขึ้นอยู่กับเลขชุด ใดชุดหนึ่งโดยเฉพาะ ต้องสามารถทำงานได้กับทุกกรณีกับเซตของเลขจำนวนเต็มบวก
- แนวคิด: เราเห็นชัดเจนว่าการหาเลขที่มากที่สุดจากชุดของตัวเลขจำนวนมากๆนั้น คงไม่สามารถทำได้เพียงขั้นตอนเดียวแน่นอน ไม่ว่าจะทำโดยคนหรือโดยคอมพิวเตอร์ ดังนั้นอัลกอริธึมจำเป็นจะต้องตรวจสอบเลขแต่ละจำนวนอย่างละเอียด
- วิธีแก้ปัญหา: เราจะใช้วิธีการหยั่งรู้เพื่อแก้ปัญหานี้ เริ่มต้นจากเซตของเลขจำนวนน้อยๆก่อนเช่น 5 จำนวน แล้วจึงค่อยๆขยายวิธีการไปยังเลขจำนวนมากๆ 

::right::

<div class="text-center font-bold text-2xl">
การหาเลขที่มีค่ามากที่สุด ระหว่างเลขจำนวนเต็ม 5 จำนวน 
</div>

![Find largest](/images/chapter8/find_largest.png)

---
layout: two-cols
---

วิธีการแก้ปัญหาสำหรับเลข 5 ตัวที่มีหลักการและข้อจำกัดที่ชัดเจนก็
สามารถใช้แก้ปัญหาที่มีเลข 1000 หรือ 1000000 จำนวนได้เช่นกัน สมมติว่าเรามีเลข 5 จำนวน อัลกอริธึมจะตรวจสอบตัวเลขทีละตัว ดูตัวแรกโดยไม่ทราบว่าตัวที่สองคืออะไร? จากนั้นดูตัวที่สอง สาม สี่ ห้า ตามลำดับ


::right::

<div class="text-center font-bold text-2xl">
การหาเลขที่มีค่ามากที่สุด ระหว่างเลขจำนวนเต็ม 5 จำนวน 
</div>

![Find largest](/images/chapter8/find_largest.png)


---
layout: two-cols
---

- สมมติเราเรียกอัลกอริธึมนี้ว่า FindLargest อัลกอริธึมจะรับอินพุทเป็นจำนวนเต็ม 5 จำนวน แล้วส่งผลลัพธ์เป็นจำนวนเต็มที่มีค่ามากที่สุดออกมา เราเขียนเป็นรูปแบบดังนี้

::right::

<div class="text-center font-bold text-2xl">
การหาเลขที่มีค่ามากที่สุด ระหว่างเลขจำนวนเต็ม 5 จำนวน 
</div>

![Find largest](/images/chapter8/find_largest.png)

---
layout: two-cols
---

- อินพุท: อัลกอริธึมรับจำนวนเต็ม 5 จำนวนคือ     12  8  13  9  11
- การประมวลผล: อัลกอริธึมทำงาน 5 ขั้นตอนดังนี้ 

    1. อัลกอริธึมจะตรวจสอบตัวแรก (คือ 12) ก่อนเนื่องจาก
    อัลกอริธึมไม่สามารถเห็นเลขที่เหลืออยู่ได้ มันจึงกำหนดให้เลขตัวแรกเป็นค่าตัวเลขที่มีค่ามากที่สุด สมมติเราเก็บตัวเลขไว้ที่ตัวแปร Largest ดังนั้น ณ จุดนี้ ตัวแปร Largest จะมีค่าเท่ากับ 12 แล้วจึงไปทำในขั้นตอนต่อไป 

::right::

<div class="text-center font-bold text-2xl">
การหาเลขที่มีค่ามากที่สุด ระหว่างเลขจำนวนเต็ม 5 จำนวน 
</div>

![Find largest](/images/chapter8/find_largest.png)

---
layout: two-cols
---

2. อัลกอริธึมตรวจสอบตัวเลขตัวที่ 2 (คือ 8) แล้วเปรียบเทียบกับค่าใน Largest พบว่าค่าใน Largest มีค่ามากกว่าตัวเลขตัวที่ 2 ตัวแปร Largest จึงยังต้องเก็บค่าเดิม (คือ 12) ไว้ตามเดิมไม่มีการเปลี่ยนแปลง 


::right::

<div class="text-center font-bold text-2xl">
การหาเลขที่มีค่ามากที่สุด ระหว่างเลขจำนวนเต็ม 5 จำนวน 
</div>

![Find largest](/images/chapter8/find_largest.png)

---
layout: two-cols
---

3. ตรวจสอบอินพุทตัวที่ 3 (คือ 13) ซึ่งมีค่ามากกว่าค่าที่เก็บอยู่ใน Largest (คือ 12) แสดงว่าค่าที่เก็บอยู่ใน Largest ไม่ใช่ตัวเลขที่มีค่ามากที่สุดอีกต่อไปแล้ว จึงต้องเปลี่ยนค่าของ Largest จาก 12 เป็น 13 จากนั้นจึงไปทำขั้นตอนต่อไป

::right::

<div class="text-center font-bold text-2xl">
การหาเลขที่มีค่ามากที่สุด ระหว่างเลขจำนวนเต็ม 5 จำนวน 
</div>

![Find largest](/images/chapter8/find_largest.png)

---
layout: two-cols
---

4. ตรวจสอบอินพุทตัวที่ 4 (คือ 9) ซึ่งมีค่าน้อยกว่าค่าใน Largest จึงไม่ต้องเปลี่ยนแปลงอะไร ไปทำขั้นตอนที่ 5 ได้เลย

::right::

<div class="text-center font-bold text-2xl">
การหาเลขที่มีค่ามากที่สุด ระหว่างเลขจำนวนเต็ม 5 จำนวน 
</div>

![Find largest](/images/chapter8/find_largest.png)

---
layout: two-cols
---

5. ตรวจสอบอินพุทตัวที่ 5 ก็ไม่มีอะไรเปลี่ยนแปลง

- ผลลัพธ์: อัลกอริธึมส่งผลลัพธ์เป็นค่าของตัวแปร Largest คือ 13

::right::

<div class="text-center font-bold text-2xl">
การหาเลขที่มีค่ามากที่สุด ระหว่างเลขจำนวนเต็ม 5 จำนวน 
</div>

![Find largest](/images/chapter8/find_largest.png)

---
layout: two-cols
---

# 3. กำหนดการกระทำ (actions) ให้ชัดเจนมากขึ้น

- จากรูปที่แล้ว ไม่ได้ระบุว่าในแต่ละขั้นตอนนั้นต้องทำอะไร เราสามารถเพิ่มรายละเอียดได้ดังนี้
- ขั้นที่ 1: กำหนดให้ตัวแปร Largest เท่ากับอินพุทตัวแรก
- ขั้นที่ 2 ถึง ขั้นที่ 5: เปรียบเทียบค่าที่เก็บอยู่ใน Largest กับค่าอินพุทตัวที่กำลังตรวจสอบอยู่ ถ้าตัวเลขที่กำลังตรวจสอบมีค่ามากกว่าค่าที่อยู่ใน Largest ให้กำหนดค่าตัวแปร Largest เป็นค่าที่กำลังตรวจสอบ

::right::

<div class="text-center font-bold text-2xl">
นิยามการกระทำในอัลกอริธึม FindLargest
</div>

![find largest2](/images/chapter8/find_largest2.png)

---
layout: two-cols
---

# 4.เพิ่มรายละเอียดให้มากขึ้น (Refinement) 

- อัลกอริธึมที่ผ่านมาจำเป็นที่จะต้องเพิ่มรายละเอียดให้มากขึ้นอีกเพื่อให้สามารถเปลี่ยนไปเป็นโปรแกรมได้โดยง่าย 

::right::

<div class="text-center font-bold text-2xl">
อัลกอริธึม FindLargest ที่ละเอียดมากขึ้น
</div>


![find largest3](/images/chapter8/find_largest3.png)

---
layout: two-cols
---

อย่างไรก็ดี ยังมีปัญหาหลักอยู่ 2 ประการคือ 
1. การกระทำในขั้นที่ 1 แตกต่างจากการกระทำในขั้นที่ 2-5 และ 
2. คำสั่งกระทำที่ใช้ในขั้นที่ 1 ก็แตกต่างจากจากขั้นที่ 2-5 เราสามารถปรับอัลกอริธึมเพื่อขจัดปัญหาทั้งสองประการได้ โดยการเปลี่ยนข้อ ความในขั้นที่ 2-5
    - “ถ้าตัวเลขที่กำลังตรวจสอบอยู่มีค่ามากกว่าค่าใน Largest แล้ว ให้กำหนดค่า Largest เท่ากับค่าตัวเลขที่กำลังตรวจสอบ”
    - เหตุผลที่ขั้นที่ 1 แตกต่างจากขั้นที่ 2-5 เพราะตัวแปร Largest ยังไม่ได้มีการกำหนดค่าเริ่มต้น


::right::

<div class="text-center font-bold text-2xl">
อัลกอริธึม FindLargest ที่ละเอียดมากขึ้น
</div>


![find largest3](/images/chapter8/find_largest3.png)

---
layout: two-cols
---

- ถ้าเรากำหนดค่าเริ่มต้นของ Largest = 0 (ไม่มีเลขจำนวนเต็มบวกใดน้อยกว่า 0) แล้วขั้นที่ 1 จะเหมือนกับขั้นที่ 2-5 
- ถ้าเราเพิ่มขั้นที่ 0 เพื่อกำหนดค่า Largest = 0 ก่อนเริ่มทำงาน จะได้ผลดังรูป


::right::

<div class="text-center font-bold text-2xl">
อัลกอริธึม FindLargest ที่ละเอียดมากขึ้น
</div>

![find largest3](/images/chapter8/find_largest3.png)

---
layout: two-cols
---

# 5. การทำให้เป็นกรณีทั่วไป (Generalization)

- เราสามารถทำให้อัลกอริธึมทำงานได้กับเลขจำนวนเต็มบวกกี่จำนวนก็ได้ สมมติมีเลขจำนวนเต็มบวก N ตัว (N อาจจะเป็น 1,000 หรือ 10,000 หรือ 1,000,000 หรือมากกว่าก็ได้) ถ้าดูแบบผิวเผินเราอาจจะบอกว่า ก็เขียนตามรูปที่แล้ว โดยเขียนซ้ำๆเท่ากับ N ขั้นตอน เป็นไปได้แต่จะทำให้อัลกอริธึมยาวมาก มีวิธีที่ดีกว่า คือเราบอกให้คอมพิวเตอร์ทำซ้ำๆจำนวน N ครั้งดังรูป

::right::

<div class="text-center font-bold text-2xl">
กรณีทั่วไปของอัลกอริธึม FindLargest
</div>

![find largest4](/images/chapter8/find_largest4.png)

---
layout: section
---

# โครงสร้าง 3 รูปแบบ Three constructs

---
layout: two-cols
---

# 1. โครงสร้างการเขียนอัลกอริธึม 3 รูปแบบ (Three Constructs)

- นักคอมพิวเตอร์ได้กำหนดโครงสร้าง 3 รูปแบบเพื่อใช้ในการเขียนโปรแกรมแบบโครงสร้างหรืออัลกอริธึม แนวคิดคือคอมพิวเตอร์โปรแกรมใดๆจะสามารถเขียนได้โดยใช้โครงสร้างเพียง 3 รูปแบบนี้ โครงสร้างทั้งสามรูปแบบได้แก่: 
    1. การทำตามลำดับ (sequence) 
    2. การตัดสินใจ (decision หรือ selection) และ 
    3. การทำซ้ำๆ (repetition) ดังรูป

::right::

<div class="text-center font-bold text-2xl">
โครงสร้าง 3 แบบ
</div>


![three constructs](/images/chapter8/three_constructs.png)

---
layout: two-cols
---

- ได้มีการพิสูจน์แล้วว่าในการเขียนโปรแกรมคอมพิวเตอร์นั้นใช้โครงสร้างแค่ 3 รูปแบบนี้ก็เพียงพอ 
ไม่จำเป็นต้องใช้โครงสร้างแบบอื่น 

- การใช้โครงสร้างทั้งสามในการเขียนโปรแกรมหรือ 
อธิบาย อัลกอริธึม จะทำให้โปรแกรมหรืออัลกอริธึมเข้าใจได้ง่าย แก้ไขได้ง่าย และเปลี่ยนแปลงได้ง่าย

::right::

<div class="text-center font-bold text-2xl">
โครงสร้าง 3 แบบ
</div>


![three constructs](/images/chapter8/three_constructs.png)

---
layout: section
---

# การแทนอัลกอริธึม Algorithm Representation

---

- ปกติการแทนอัลกอริธึมเรานิยมใช้รูปภาพ เพราะเข้าใจง่ายและมีความชัดเจน โดยทั่วไปเราใช้ 2 รูปแบบคือ 
    1. ผังงาน (flowchart): มีลักษณะคล้ายรูปภาพ โดยจะเน้นภาพรวมของ ตรรกะของอัลกอริธึมมากกว่ารายละเอียด ผังงานจะแสดงถึงขั้นตอนการทำงานของอัลกอริธึมตั้งแต่ต้นจนจบ รายละเอียดของผังงานจะกล่าวถึงในตอนหลังๆ

<div class="w-[700px] mx-auto">

<div class="text-center font-bold text-2xl">
ผังงานโครงสร้าง 3 แบบ
</div>

![flow chart](/images/chapter8/flowchart.png)

</div>

---

2. รหัสเทียม (pseudocode): เป็นการแทนอัลกอริธึมโดยใช้ภาษาเขียน มีลักษณะคล้ายภาษาอังกฤษที่ใช้กันโดยทั่วไป แต่ระดับความละเอียดนั้นแต่ละคนก็ใช้แตกต่างกันไป ไม่มีมาตรฐานใดกำหนดชัดเจน บางคนเขียนคล้ายๆภาษาอังกฤษ บางคนเขียนโดยใช้รูปแบบคล้ายภาษาปาสคาล  รายละเอียดจะอธิบายในบทต่อๆไป


<div class="w-[700px] mx-auto">

<div class="text-center font-bold text-2xl">
Pseudocode สำหรับโครงสร้าง 3 แบบ

</div>

![pseudocode](/images/chapter8/pseudocode.png)

</div>

---

# ตัวอย่างที่ 1

- จงเขียน algorithm ในรูป pseudocode เพื่อหาค่าเฉลี่ยของเลข 2 จำนวน

```
Algorithm 8.1: Average of two
	Input:  Two numbers
		1. Add the two numbers
		2. Divide the result by 2
		3. Return the result by step 2
```

---

# ตัวอย่างที่ 2

- จงเขียนอัลกอริธึมเพื่อเปลี่ยนค่าคะแนนให้เป็นเกรด ผ่าน/ไม่ผ่าน

```

Algorithm 8.2: Pass/No pass Grade
	Input: One number
	If (the number is greater than or equal to 70) Then
    	1.1  Set the grade to “pass”
	Else
   		1.2   Set the grade to “nopass”
	End If
	Return the grade

```

---
layout: two-cols
---

<div class="w-[400px] mx-auto">

```mermaid
flowchart TD
    A@{ shape: stadium, label: "Start" } -->
    B@{ shape: rect, label: "count = 1\ntotal = 0" } -->
    C@{ shape: diamond, label: "count < 5?" } --True-->
    D@{ shape: rect, label: "total = total + count" } -->
    E@{ shape: rect, label: "count = count + 1" }
    C --False--> F@{ shape: rect, label: "output = total" }
    F --> G@{ shape: stadium, label: "End" }
    E --> C
    classDef dot fill:#3a32a8,stroke:#32a89e,stroke-width:3px,color:#fff,stroke-dasharray: 5 5
```
</div>

::right::

# โจทย์
- What will be output when this flowchart is executed?
    1. 4
    2. 10
    3. 15
    4. There is an error in the flowchart

---
layout: two-cols
---

<div class="w-[400px] mx-auto">

```mermaid
flowchart TD
    A@{ shape: stadium, label: "Start" } -->
    B:::dot@{ shape: rect, label: "count = 1\ntotal = 0" } -->
    C@{ shape: diamond, label: "count < 5?" } --True-->
    D@{ shape: rect, label: "total = total + count" } -->
    E@{ shape: rect, label: "count = count + 1" }
    C --False--> F@{ shape: rect, label: "output = total" }
    F --> G@{ shape: stadium, label: "End" }
    E --> C
    classDef dot fill:#3a32a8,stroke:#32a89e,stroke-width:3px,color:#fff,stroke-dasharray: 5 5
```
</div>

::right::

**State**
```js
count = 1
total = 0
```

**Process**
- Assign 1 to the variable count
- Assign 0 to the variable total

**Output**

---
layout: two-cols
---

<div class="w-[400px] mx-auto">

```mermaid
flowchart TD
    A@{ shape: stadium, label: "Start" } -->
    B@{ shape: rect, label: "count = 1\ntotal = 0" } -->
    C:::dot@{ shape: diamond, label: "count < 5?" } --True-->
    D@{ shape: rect, label: "total = total + count" } -->
    E@{ shape: rect, label: "count = count + 1" }
    C --False--> F@{ shape: rect, label: "output = total" }
    F --> G@{ shape: stadium, label: "End" }
    E --> C
    classDef dot fill:#3a32a8,stroke:#32a89e,stroke-width:3px,color:#fff,stroke-dasharray: 5 5
```
</div>

::right::

**State**
```js
count = 1
total = 0
```

**Process**
- Check if the condition is True


**Output**

---
layout: two-cols
---

<div class="w-[400px] mx-auto">

```mermaid
flowchart TD
    A@{ shape: stadium, label: "Start" } -->
    B@{ shape: rect, label: "count = 1\ntotal = 0" } -->
    C@{ shape: diamond, label: "count < 5?" } --True-->
    D:::dot@{ shape: rect, label: "total = total + count" } -->
    E@{ shape: rect, label: "count = count + 1" }
    C --False--> F@{ shape: rect, label: "output = total" }
    F --> G@{ shape: stadium, label: "End" }
    E --> C
    classDef dot fill:#3a32a8,stroke:#32a89e,stroke-width:3px,color:#fff,stroke-dasharray: 5 5
```
</div>

::right::

**State**
```js
count = 1
total = 1
```

**Process**
- Add the value of count to the value held by total



**Output**

---
layout: two-cols
---

<div class="w-[400px] mx-auto">

```mermaid
flowchart TD
    A@{ shape: stadium, label: "Start" } -->
    B@{ shape: rect, label: "count = 1\ntotal = 0" } -->
    C@{ shape: diamond, label: "count < 5?" } --True-->
    D@{ shape: rect, label: "total = total + count" } -->
    E:::dot@{ shape: rect, label: "count = count + 1" }
    C --False--> F@{ shape: rect, label: "output = total" }
    F --> G@{ shape: stadium, label: "End" }
    E --> C
    classDef dot fill:#3a32a8,stroke:#32a89e,stroke-width:3px,color:#fff,stroke-dasharray: 5 5
```
</div>

::right::

**State**
```js
count = 2
total = 1
```

**Process**
- Add 1 to the value held by count




**Output**

---
layout: two-cols
---

<div class="w-[400px] mx-auto">

```mermaid
flowchart TD
    A@{ shape: stadium, label: "Start" } -->
    B@{ shape: rect, label: "count = 1\ntotal = 0" } -->
    C:::dot@{ shape: diamond, label: "count < 5?" } --True-->
    D@{ shape: rect, label: "total = total + count" } -->
    E@{ shape: rect, label: "count = count + 1" }
    C --False--> F@{ shape: rect, label: "output = total" }
    F --> G@{ shape: stadium, label: "End" }
    E --> C
    classDef dot fill:#3a32a8,stroke:#32a89e,stroke-width:3px,color:#fff,stroke-dasharray: 5 5
```
</div>

::right::

**State**
```js
count = 2
total = 1
```

**Process**
- Check if the condition is True





**Output**

---
layout: two-cols
---

<div class="w-[400px] mx-auto">

```mermaid
flowchart TD
    A@{ shape: stadium, label: "Start" } -->
    B@{ shape: rect, label: "count = 1\ntotal = 0" } -->
    C@{ shape: diamond, label: "count < 5?" } --True-->
    D:::dot@{ shape: rect, label: "total = total + count" } -->
    E@{ shape: rect, label: "count = count + 1" }
    C --False--> F@{ shape: rect, label: "output = total" }
    F --> G@{ shape: stadium, label: "End" }
    E --> C
    classDef dot fill:#3a32a8,stroke:#32a89e,stroke-width:3px,color:#fff,stroke-dasharray: 5 5
```
</div>

::right::

**State**
```js
count = 2
total = 3
```

**Process**
- Add the value of count to the value held by total





**Output**

---
layout: two-cols
---

<div class="w-[400px] mx-auto">

```mermaid
flowchart TD
    A@{ shape: stadium, label: "Start" } -->
    B@{ shape: rect, label: "count = 1\ntotal = 0" } -->
    C@{ shape: diamond, label: "count < 5?" } --True-->
    D@{ shape: rect, label: "total = total + count" } -->
    E:::dot@{ shape: rect, label: "count = count + 1" }
    C --False--> F@{ shape: rect, label: "output = total" }
    F --> G@{ shape: stadium, label: "End" }
    E --> C
    classDef dot fill:#3a32a8,stroke:#32a89e,stroke-width:3px,color:#fff,stroke-dasharray: 5 5
```
</div>

::right::

**State**
```js
count = 3
total = 3
```

**Process**
- Add 1 to the value held by count






**Output**

---
layout: two-cols
---

<div class="w-[400px] mx-auto">

```mermaid
flowchart TD
    A@{ shape: stadium, label: "Start" } -->
    B@{ shape: rect, label: "count = 1\ntotal = 0" } -->
    C:::dot@{ shape: diamond, label: "count < 5?" } --True-->
    D@{ shape: rect, label: "total = total + count" } -->
    E@{ shape: rect, label: "count = count + 1" }
    C --False--> F@{ shape: rect, label: "output = total" }
    F --> G@{ shape: stadium, label: "End" }
    E --> C
    classDef dot fill:#3a32a8,stroke:#32a89e,stroke-width:3px,color:#fff,stroke-dasharray: 5 5
```
</div>

::right::

**State**
```js
count = 3
total = 3
```

**Process**
- Check if the condition is True

**Output**

---
layout: two-cols
---

<div class="w-[400px] mx-auto">

```mermaid
flowchart TD
    A@{ shape: stadium, label: "Start" } -->
    B@{ shape: rect, label: "count = 1\ntotal = 0" } -->
    C@{ shape: diamond, label: "count < 5?" } --True-->
    D:::dot@{ shape: rect, label: "total = total + count" } -->
    E@{ shape: rect, label: "count = count + 1" }
    C --False--> F@{ shape: rect, label: "output = total" }
    F --> G@{ shape: stadium, label: "End" }
    E --> C
    classDef dot fill:#3a32a8,stroke:#32a89e,stroke-width:3px,color:#fff,stroke-dasharray: 5 5
```
</div>

::right::

**State**
```js
count = 3
total = 6
```

**Process**
- Add the value of count to the value held by total

**Output**

---
layout: two-cols
---

<div class="w-[400px] mx-auto">

```mermaid
flowchart TD
    A@{ shape: stadium, label: "Start" } -->
    B@{ shape: rect, label: "count = 1\ntotal = 0" } -->
    C@{ shape: diamond, label: "count < 5?" } --True-->
    D@{ shape: rect, label: "total = total + count" } -->
    E:::dot@{ shape: rect, label: "count = count + 1" }
    C --False--> F@{ shape: rect, label: "output = total" }
    F --> G@{ shape: stadium, label: "End" }
    E --> C
    classDef dot fill:#3a32a8,stroke:#32a89e,stroke-width:3px,color:#fff,stroke-dasharray: 5 5
```
</div>

::right::

**State**
```js
count = 4
total = 6
```

**Process**
- Add 1 to the value held by count

**Output**

---
layout: two-cols
---

<div class="w-[400px] mx-auto">

```mermaid
flowchart TD
    A@{ shape: stadium, label: "Start" } -->
    B@{ shape: rect, label: "count = 1\ntotal = 0" } -->
    C:::dot@{ shape: diamond, label: "count < 5?" } --True-->
    D@{ shape: rect, label: "total = total + count" } -->
    E@{ shape: rect, label: "count = count + 1" }
    C --False--> F@{ shape: rect, label: "output = total" }
    F --> G@{ shape: stadium, label: "End" }
    E --> C
    classDef dot fill:#3a32a8,stroke:#32a89e,stroke-width:3px,color:#fff,stroke-dasharray: 5 5
```
</div>

::right::

**State**
```js
count = 4
total = 6
```

**Process**
- Check if the condition is True

**Output**

---
layout: two-cols
---

<div class="w-[400px] mx-auto">

```mermaid
flowchart TD
    A@{ shape: stadium, label: "Start" } -->
    B@{ shape: rect, label: "count = 1\ntotal = 0" } -->
    C@{ shape: diamond, label: "count < 5?" } --True-->
    D:::dot@{ shape: rect, label: "total = total + count" } -->
    E@{ shape: rect, label: "count = count + 1" }
    C --False--> F@{ shape: rect, label: "output = total" }
    F --> G@{ shape: stadium, label: "End" }
    E --> C
    classDef dot fill:#3a32a8,stroke:#32a89e,stroke-width:3px,color:#fff,stroke-dasharray: 5 5
```
</div>

::right::

**State**
```js
count = 4
total = 10
```

**Process**
- Add the value of count to the value held by total

**Output**

---
layout: two-cols
---

<div class="w-[400px] mx-auto">

```mermaid
flowchart TD
    A@{ shape: stadium, label: "Start" } -->
    B@{ shape: rect, label: "count = 1\ntotal = 0" } -->
    C@{ shape: diamond, label: "count < 5?" } --True-->
    D@{ shape: rect, label: "total = total + count" } -->
    E:::dot@{ shape: rect, label: "count = count + 1" }
    C --False--> F@{ shape: rect, label: "output = total" }
    F --> G@{ shape: stadium, label: "End" }
    E --> C
    classDef dot fill:#3a32a8,stroke:#32a89e,stroke-width:3px,color:#fff,stroke-dasharray: 5 5
```
</div>

::right::

**State**
```js
count = 5
total = 10
```

**Process**
- Add 1 to the value held by count

**Output**

---
layout: two-cols
---

<div class="w-[400px] mx-auto">

```mermaid
flowchart TD
    A@{ shape: stadium, label: "Start" } -->
    B@{ shape: rect, label: "count = 1\ntotal = 0" } -->
    C:::dot@{ shape: diamond, label: "count < 5?" } --True-->
    D@{ shape: rect, label: "total = total + count" } -->
    E@{ shape: rect, label: "count = count + 1" }
    C --False--> F@{ shape: rect, label: "output = total" }
    F --> G@{ shape: stadium, label: "End" }
    E --> C
    classDef dot fill:#3a32a8,stroke:#32a89e,stroke-width:3px,color:#fff,stroke-dasharray: 5 5
```
</div>

::right::

**State**
```js
count = 5
total = 10
```

**Process**
- Check if the condition is True

**Output**

---
layout: two-cols
---

<div class="w-[400px] mx-auto">

```mermaid
flowchart TD
    A@{ shape: stadium, label: "Start" } -->
    B@{ shape: rect, label: "count = 1\ntotal = 0" } -->
    C@{ shape: diamond, label: "count < 5?" } --True-->
    D@{ shape: rect, label: "total = total + count" } -->
    E@{ shape: rect, label: "count = count + 1" }
    C --False--> F:::dot@{ shape: rect, label: "output = total" }
    F --> G@{ shape: stadium, label: "End" }
    E --> C
    classDef dot fill:#3a32a8,stroke:#32a89e,stroke-width:3px,color:#fff,stroke-dasharray: 5 5
```
</div>

::right::

**State**
```js
count = 5
total = 10
```

**Process**
- The loop terminates and the instruction from the False branch is executed

**Output**
- 10

---
layout: section
---

# นิยามอัลกอริธึมที่เป็นทางการมากขึ้น MORE FORMAL DEFINITION

---

- นิยาม: อัลกอริธึมคือเซตของขั้นตอนการแก้ปัญหาที่จัดเรียงลำดับอย่างชัดเจน (ordered set) ไม่คลุมเครือ (unambiguous steps) ก่อให้เกิดผลลัพธ์(produce a result) ภายในเวลาที่จำกัด (terminate in a finite time)
- Ordered set: หมายความว่าคำสั่งทั้งหมดต้องเรียงลำดับ และ well-defined 
- Unambiguous steps: หมายความว่าแต่ละขั้นตอนต้องมีความหมายชัดเจน ไม่เปิดโอกาสให้ตีความได้มากกว่า 1 อย่าง 
- Produce  result: หมายความว่าอัลกอริธึมจะต้องสร้างผลลัพธ์ที่เป็นรูปธรรม เช่นผลที่เป็นตัวเลข หรือผลที่เกิดจากการพิมพ์ เป็นต้น 
- Terminate in a finite time: หมายความว่าอัลกอริธึมจะต้องมีการจบสิ้น หรือจะต้องหยุดในที่สุด

---
layout: section
---

# อัลกอริธึมย่อย SUBALGORITHMS

---

- หลักการของการเขียนโปรแกรมเชิงโครงสร้าง (structured programming) คือการแบ่งอัลกอริธึมออกเป็นหน่วยย่อยๆ แต่ละหน่วยก็สามารถแบ่งย่อยๆลงไปได้อีกจนกระทั่งแต่ละส่วนเป็น intrinsic คือเมื่ออ่านแล้วเข้าใจได้ทันที ทำงานเพียงอย่างเดียว แต่ละส่วนย่อยที่ถูกแบ่งนี้มีชื่อเรียกหลายแบบเช่น subprogram, subroutines, procedures, functions, methods, modules เป็นต้น

<div class="flex gap-3">

<div class="w-1/3">

- ตัวอย่าง: เราสามารถแบ่งอัลกอริธึม FindLargest ออกเป็น subalgorithm โดยตั้งชื่อว่า “FindLarger” เพื่อให้ทำหน้าที่หาตัวเลขที่มีค่ามากกว่าระหว่างเลข 2 จำนวนใดๆ  อัลกอริธึมย่อย “FindLarger” จะถูกเรียกเพื่อให้ทำงานซ้ำๆในแต่ละรอบ ดังรูป

</div>

<div class="w-2/3 mx-auto">

<div class="text-center font-bold text-2xl">
Concept of a subalgorithm

</div>

![sub algorithm](/images/chapter8/subalgorithm.png)

</div>
</div>


---
layout: section
---

# ตัวอย่างอัลกอริธึมพื้นฐาน BASIC ALGORITHMS

---
layout: two-cols
---

# ตัวอย่างที่ 1: การหาผลรวมของเลขหลายๆจำนวน : SUMMATION

- การหาผลรวมของเลขหลายๆจำนวนนับเป็นการกระทำพื้นฐานที่ใช้แก้ปัญหาหลายๆอย่างเช่นการหาค่าเฉลี่ย การหายอดรวมทางบัญชี การหารยอดรวมของรายรับ-จ่าย เป็นต้น ขั้นตอนการทำงานเป็นดังนี้
	1. กำหนดค่าเริ่มต้นของ sum ให้เท่ากับ 0
    2. Loop: ในแต่ละรอบ บวกเลขที่รับเข้ามากับค่าใน sum
    3. ส่งผลลัพธ์สุดท้ายกลับหลังออกจาก Loop
แทน การทำงานอัลกอริธึม SUMMATION ดังรูป


::right::




<div class="w-[200px] mx-auto">

<div class="text-center font-bold text-2xl">
Summation
</div>

![summation](/images/chapter8/summation.png)

</div>

---

# การเรียงลำดับ

- การเรียงลำดับกลุ่มของตัวเลขนับเป็นการประยุกต์ที่สำคัญยิ่งในทางคอมพิวเตอร์ วิธีการเรียงลำดับมีหลายแบบ การเลือกใช้ขึ้นอยู่กับประเภทและจำนวนของข้อมูล ตัวอย่างอัลกอริธึมที่นิยมใช้กันมากมี 3 อัลกอริธึมคือ
    1. Selection Sort
    2. Bubble Sort
    3. Insertion Sort

---
layout: section
---

# Selection Sort
---

<v-switch>

<template #0>

<div class="w-[700px] mx-auto">

<div class="text-center font-bold text-2xl">
Selection Sort
</div>

![selection sort](/images/chapter8/selection_sort.png)

</div>
</template>

<template #1>

# Example 1 (1)


<div class="w-[400px] mx-auto">

<div class="text-center font-bold text-2xl">
Selection Sort
</div>

![selection sort2](/images/chapter8/selection_sort2.png)

</div>
</template>

<template #2>

# Example 1 (2)

<div class="w-[400px] mx-auto">

<div class="text-center font-bold text-2xl">
Selection Sort
</div>

![selection sort3](/images/chapter8/selection_sort3.png)

</div>
</template>

<template #3>

# Example 1 (3)

<div class="w-[200px] mx-auto">

<div class="text-center font-bold text-2xl">
Selection Sort Algorithm
</div>

![selection sort4](/images/chapter8/selection_sort4.png)

</div>

</template>

</v-switch>

---
layout: section
---

# Bubble Sort


---


<v-switch>

<template #0>

<div class="w-[700px] mx-auto">

<div class="text-center font-bold text-2xl">
Bubble Sort
</div>

![bubble sort](/images/chapter8/bubble_sort.png)

</div>
</template>

<template #1>

# Example 1 

<div class="w-[400px] mx-auto">

<div class="text-center font-bold text-2xl">
Bubble Sort
</div>



![bubble sort2](/images/chapter8/bubble_sort2.png)

</div>

</template>

<template #2>


# Example 1 (2)

<div class="w-[500px] mx-auto">

<div class="text-center font-bold text-2xl">
Bubble Sort
</div>

![bubble sort3](/images/chapter8/bubble_sort3.png)

</div>
</template>
</v-switch>




---

- อัลกอริทึมการเรียงลำดับแบบ bubble sort ทำงานโดยดำเนินการซ้ำๆ ในรายการ เปรียบเทียบรายการที่อยู่ติดกัน และสลับรายการหากรายการนั้นอยู่ในลำดับที่ไม่ถูกต้อง
- ทุกครั้งที่อัลกอริทึมดำเนินการซ้ำๆ ในรายการ เรียกว่าการผ่าน การดำเนินการซ้ำๆ ในรายการจะทำซ้ำจนกว่าจะสามารถเรียงลำดับรายการได้
- ในสไลด์ถัดไป คุณจะเห็นว่าอัลกอริทึมจะสลับรายการที่อยู่ติดกันซึ่งอยู่ในลำดับที่ไม่ถูกต้องอย่างไรในระหว่างการเรียงลำดับแบบฟองครั้งหนึ่ง

---

# Bubble sort: one pass

- แต่ละตัวเลขจะซ่อนอยู่ใต้ถ้วย ถ้วยจะต้องเรียงลำดับตามค่าต่ำสุดทางด้านซ้าย
<v-switch>
<template #0>

![one pass](/images/chapter8/one_pass.png)

</template>
<template #1>

![one pass2](/images/chapter8/one_pass2.png)

- นี่คือลำดับเริ่มต้นของถ้วย อย่างไรก็ตาม เมื่อคุณทำการเรียงลำดับแบบ bubble sort คุณจะเปรียบเทียบได้เพียงสองรายการในแต่ละครั้งเท่านั้น
</template>

<template #2>



![one pass3](/images/chapter8/one_pass3.png)

- เริ่มจากถ้วยแรก
</template>

<template #3>

![one pass4](/images/chapter8/one_pass4.png)

- เปรียบเทียบตัวปัจจุบันกับตัวถัดไป
</template>

<template #4>

![one pass5](/images/chapter8/one_pass5.png)


- ถ้าตัวปัจจุบันมากกว่าตัวถัดไปก็ให้สลับ
</template>

<template #5>

![one pass6](/images/chapter8/one_pass6.png)

- ถ้าตัวปัจจุบันมากกว่าตัวถัดไปก็ให้สลับ
</template>

<template #6>

![one pass7](/images/chapter8/one_pass7.png)
- ตัวปัจจุบันก็จะไปอยู่ในตำแหน่งถัดไป
</template>

<template #7>

![one pass7](/images/chapter8/one_pass7_1.png)

- เปรียบเทียบตัวปัจจุบันกับตัวถัดไป
</template>


<template #8>

![one pass8](/images/chapter8/one_pass8.png)

- ถ้าตัวปัจจุบันมากกว่าตัวถัดไปก็ให้สลับ
</template>

<template #9>

![one pass9](/images/chapter8/one_pass9.png)

- ถ้าตัวปัจจุบันมากกว่าตัวถัดไปก็ให้สลับ
</template>

<template #10>

![one pass10](/images/chapter8/one_pass10.png)

- ตัวปัจจุบันก็จะไปอยู่ในตำแหน่งถัดไป
</template>

<template #11>

![one pass11](/images/chapter8/one_pass11.png)

- เปรียบเทียบตัวปัจจุบันกับตัวถัดไป
</template>

<template #12>

![one pass12](/images/chapter8/one_pass12.png)

- ถ้าตัวปัจจุบันมากกว่าตัวถัดไปก็ให้สลับ
</template>

<template #13>

![one pass13](/images/chapter8/one_pass13.png)

- ตัวปัจจุบันก็จะไปอยู่ในตำแหน่งถัดไป
</template>

<template #14>

![one pass14](/images/chapter8/one_pass14.png)

- เปรียบเทียบตัวปัจจุบันกับตัวถัดไป
</template>

<template #15>

![one pass15](/images/chapter8/one_pass15.png)

- ถ้าตัวปัจจุบันมากกว่าตัวถัดไปก็ให้สลับ
</template>

<template #16>

![one pass16](/images/chapter8/one_pass16.png)

- ถ้าตัวปัจจุบันมากกว่าตัวถัดไปก็ให้สลับ
</template>

<template #17>

![one pass17](/images/chapter8/one_pass17.png)

- ตัวปัจจุบันก็จะไปอยู่ในตำแหน่งถัดไป
</template>

<template #18>

![one pass18](/images/chapter8/one_pass18.png)

- เปรียบเทียบตัวปัจจุบันกับตัวถัดไป
</template>

<template #19>

![one pass19](/images/chapter8/one_pass19.png)

- ถ้าตัวปัจจุบันมากกว่าตัวถัดไปก็ให้สลับ

</template>

<template #20>


![one pass20](/images/chapter8/one_pass20.png)

- ตัวปัจจุบันก็จะไปอยู่ในตำแหน่งถัดไป
</template>

<template #21>

![one pass21](/images/chapter8/one_pass21.png)

- เปรียบเทียบตัวปัจจุบันกับตัวถัดไป
</template>

<template #22>

![one pass22](/images/chapter8/one_pass22.png)

- ถ้าตัวปัจจุบันมากกว่าตัวถัดไปก็ให้สลับ
</template>

<template #23>

![one pass23](/images/chapter8/one_pass23.png)

- ถ้าตัวปัจจุบันมากกว่าตัวถัดไปก็ให้สลับ

</template>

<template #24>

![one pass24](/images/chapter8/one_pass24.png)

- ตัวปัจจุบันก็จะไปอยู่ในตำแหน่งถัดไป
</template>

<template #25>

![one pass25](/images/chapter8/one_pass25.png)

- เปรียบเทียบตัวปัจจุบันกับตัวถัดไป
</template>

<template #26>

![one pass26](/images/chapter8/one_pass26.png)
- ถ้าตัวปัจจุบันมากกว่าตัวถัดไปก็ให้สลับ
</template>

<template #27>

![one pass27](/images/chapter8/one_pass27.png)

- ถ้าตัวปัจจุบันมากกว่าตัวถัดไปก็ให้สลับ
</template>

<template #28>

![one pass28](/images/chapter8/one_pass28.png)

- ตัวปัจจุบันก็จะไปอยู่ในตำแหน่งถัดไป
</template>

<template #29>

![one pass29](/images/chapter8/one_pass29.png)

- เปรียบเทียบตัวปัจจุบันกับตัวถัดไป
</template>

<template #30>

![one pass30](/images/chapter8/one_pass30.png)

- เปรียบเทียบตัวปัจจุบันกับตัวถัดไป
</template>

<template #31>

![one pass31](/images/chapter8/one_pass31.png)

- ถ้าตัวปัจจุบันมากกว่าตัวถัดไปก็ให้สลับ

</template>

<template #32>

![one pass32](/images/chapter8/one_pass32.png)
- ตอนนี้ดำเนินการเสร็จสิ้นแล้ว หากมีการสลับใดๆ ในการดำเนินการนี้ ให้ดำเนินการตามรายการต่อไปจนกว่าจะไม่มีการสลับใดๆ เกิดขึ้น

</template>


</v-switch>


---

# Bubble sort
<div>

![bubble sort4](/images/chapter8/bubble_sort4.png)
</div>

- การตรวจสอบครั้งเดียวส่งผลให้องค์ประกอบที่ใหญ่ที่สุดไปถึงตำแหน่งสุดท้ายในตอนท้ายของรายการ เนื่องจากองค์ประกอบนั้นจะใหญ่กว่าองค์ประกอบถัดไปเสมอ
- ซึ่งหมายความว่าการตรวจสอบคู่องค์ประกอบสุดท้ายในครั้งต่อไปไม่จำเป็นต้องตรวจสอบองค์ประกอบที่ใหญ่ที่สุด เนื่องจากคุณทราบว่าองค์ประกอบที่ใหญ่ที่สุดอยู่ในตำแหน่งที่ถูกต้องแล้ว

---
layout: two-cols
---

# อัลกอริธึมสำหรับการสลับ 1 รอบ ของ bubble sort 
- คำแนะนำในการเรียงลำดับแบบ bubble sort 1 รอบสามารถเขียนได้ดังนี้:
1. นำรายการข้อมูลที่ต้องการเรียงลำดับมา
2. ทำซ้ำขั้นตอน a-c สำหรับรายการทั้งหมดในรายการ โดยเริ่มจากรายการแรก:

    a. เปรียบเทียบรายการในตำแหน่งปัจจุบันกับรายการถัดไป

    b. หากรายการในตำแหน่งปัจจุบันมีขนาดใหญ่กว่ารายการถัดไป ให้สลับรายการภายในรายการ

    c. ไปที่รายการถัดไปในรายการ

::right::

![bubble sort5](/images/chapter8/bubble_sort5.png)

---
layout: section
---

# Insertion Sort

---

<v-switch>

<template #0>

<div class="w-[700px] mx-auto">

<div class="text-center font-bold text-2xl">
Insertion Sort
</div>

![insertion sort](/images/chapter8/insertion_sort.png)
</div>
</template>

<template #1>

# Example 1 

<div class="w-[400px] mx-auto">

<div class="text-center font-bold text-2xl">
Insertion Sort
</div>

![insertion sort2](/images/chapter8/insertion_sort2.png)
</div>

</template>

<template #2>


# Example 1 (2)

<div class="w-[400px] mx-auto">

<div class="text-center font-bold text-2xl">
Insertion Sort
</div>

![insertion sort3](/images/chapter8/insertion_sort3.png)
</div>
</template>
</v-switch>

---

# Insertion Sort

- อัลกอริธึมการเรียงลำดับแบบแทรกทำงานโดยการจัดกลุ่มรายการในรายการออกเป็นสองส่วน ได้แก่ รายการย่อยที่เรียงลำดับแล้วและรายการย่อยที่ไม่เรียงลำดับ
- ในแต่ละครั้งที่ผ่านรายการ รายการจากรายการย่อยที่ไม่เรียงลำดับจะถูกเปรียบเทียบกับรายการในรายการย่อยที่เรียงลำดับแล้ว จนกว่าจะแทรกลงในตำแหน่งที่ถูกต้อง
- ในสไลด์ถัดไป คุณจะเห็นวิธีที่อัลกอริธึมแทรกรายการที่ไม่เรียงลำดับหนึ่งรายการลงในตำแหน่งที่ถูกต้องในรายการก่อน นั่นคือ การผ่านอัลกอริธึมหนึ่งครั้ง

---


# Insertion Sort: single pass

- แต่ละหมายเลขซ่อนอยู่ใต้ถ้วย ถ้วยจะต้องเรียงลำดับโดยมีค่าต่ำสุดทางด้านซ้าย

<v-switch>
<template #0>

![insertion sort4](/images/chapter8/insertion_sort4.png)
- ทำรายการที่มีการเรียงลำดับรายการแรกและรายการที่เหลือไม่ได้เรียงลำดับ

</template>

<template #1>

![insertion sort5](/images/chapter8/insertion_sort5.png)
- จัดทำรายการโดยเรียงลำดับรายการแรกและรายการที่เหลือตามลำดับ
- ในแต่ละครั้ง รายการที่ไม่เรียงลำดับรายการแรก (ถ้วยสีเทาเข้ม) จะถูกแทรกในตำแหน่งที่เหมาะสมในรายการที่เรียงลำดับแล้ว 
</template>

<template #2>

![insertion sort6](/images/chapter8/insertion_sort6.png)

- คัดลอกรายการที่ไม่เรียงลำดับแรกลงใน value
- จำเป็นต้องคัดลอกรายการสุดท้ายที่ไม่อยู่ในลำดับ เนื่องจากรายการถูก "เลื่อน" ไปทางขวา เพื่อให้มีพื้นที่สำหรับค่าใหม่ รายการสุดท้ายในรายการจึงจะถูกเขียนทับ
</template>

<template #3>

![insertion sort7](/images/chapter8/insertion_sort7.png)
- เริ่มจากตัวสุดท้ายของรายการที่เรียงแล้ว
</template>

<template #4>

![insertion sort8](/images/chapter8/insertion_sort8.png)

- **ถ้าเลขที่อยู่ในตำแหน่งปัจจุบันมากกว่า เลขที่อยู่ใน value** ให้คัดลอกเลขที่อยู่ในตำแหน่งปัจจุบัน ไปยังตำแหน่งที่อยู่ติดกันถัดไป
- เลื่อนตำแหน่งปัจจุบัน ไปยังตำแหน่งก่อนหน้าที่อยู่ติดกัน
</template>

<template #5>

![insertion sort9](/images/chapter8/insertion_sort9.png)
- ถ้าเลขที่อยู่ในตำแหน่งปัจจุบันมากกว่า เลขที่อยู่ใน value **ให้คัดลอกเลขที่อยู่ในตำแหน่งปัจจุบัน ไปยังตำแหน่งที่อยู่ติดกันถัดไป**
- เลื่อนตำแหน่งปัจจุบัน ไปยังตำแหน่งก่อนหน้าที่อยู่ติดกัน
</template>

<template #6>

![insertion sort10](/images/chapter8/insertion_sort10.png)
- ถ้าเลขที่อยู่ในตำแหน่งปัจจุบันมากกว่า เลขที่อยู่ใน value ให้คัดลอกเลขที่อยู่ในตำแหน่งปัจจุบัน ไปยังตำแหน่งที่อยู่ติดกันถัดไป
- **เลื่อนตำแหน่งปัจจุบัน ไปยังตำแหน่งก่อนหน้าที่อยู่ติดกัน**
</template>

<template #7>

![insertion sort11](/images/chapter8/insertion_sort11.png)

- **ถ้าเลขที่อยู่ในตำแหน่งปัจจุบันมากกว่า เลขที่อยู่ใน value** ให้คัดลอกเลขที่อยู่ในตำแหน่งปัจจุบัน ไปยังตำแหน่งที่อยู่ติดกันถัดไป
- เลื่อนตำแหน่งปัจจุบัน ไปยังตำแหน่งก่อนหน้าที่อยู่ติดกัน
</template>

<template #8>

![insertion sort12](/images/chapter8/insertion_sort12.png)

- ถ้าเลขที่อยู่ในตำแหน่งปัจจุบันมากกว่า เลขที่อยู่ใน value **ให้คัดลอกเลขที่อยู่ในตำแหน่งปัจจุบัน ไปยังตำแหน่งที่อยู่ติดกันถัดไป**
- เลื่อนตำแหน่งปัจจุบัน ไปยังตำแหน่งก่อนหน้าที่อยู่ติดกัน
</template>

<template #9>

![insertion sort13](/images/chapter8/insertion_sort13.png)

- ถ้าเลขที่อยู่ในตำแหน่งปัจจุบันมากกว่า เลขที่อยู่ใน value ให้คัดลอกเลขที่อยู่ในตำแหน่งปัจจุบัน ไปยังตำแหน่งที่อยู่ติดกันถัดไป
- **เลื่อนตำแหน่งปัจจุบัน ไปยังตำแหน่งก่อนหน้าที่อยู่ติดกัน**
</template>

<template #10>

![insertion sort14](/images/chapter8/insertion_sort14.png)
- ถ้าตัวเลขในตำแหน่งปัจจุบัน ไม่มากกว่าตัวเลขที่อยู่ใน value ให้คัดลอกตัวเลขที่อยู่ใน value แทรกลงไปรายการ
</template>

<template #11>

![insertion sort15](/images/chapter8/insertion_sort15.png)
- คัดลอกตัวเลขที่อยู่ใน value ลงไปในถ้วยที่อยู่ในตำแหน่งถัดไปจากตำแหน่งปัจจุบัน
</template>

<template #12>

![insertion sort16](/images/chapter8/insertion_sort16.png)

- ขณะนี้ดำเนินการเสร็จสิ้นไป 1 รอบ (การผ่านอัลกอริธึม 1 ครั้ง) โดยเพิ่มรายการย่อยที่เรียงลำดับไว้ 1 รายการ
</template>
</v-switch>

---

# อัลกอริะึมสำหรับการผ่านอัลกอริธึม 1 ครั้ง ของ Insertion Sort

- คำสั่งสำหรับการดำเนินการเรียงลำดับแบบแทรกครั้งเดียวสามารถเขียนได้ดังนี้:
    1. นำรายการที่มีรายการแรกเรียงลำดับและรายการที่เหลือไม่เรียงลำดับ
    2. คัดลอกรายการแรกที่ไม่เรียงลำดับลงในค่า
    3. ทำซ้ำขั้นตอน a-b โดยเริ่มจากรายการสุดท้ายที่เรียงลำดับแล้วจนกว่าจะไม่มีรายการเหลืออยู่หรือค่า value ที่จะแทรกในรายการ:
        - a. หากรายการในตำแหน่งปัจจุบันมีค่ามากกว่าค่า ให้คัดลอกรายการนั้นลงในรายการถัดไป แล้วไปที่รายการก่อนหน้าในรายการ
        - b. มิฉะนั้น ค่า value ก็พร้อมที่จะแทรกในรายการแล้ว
    4. คัดลอกค่า value ลงในรายการหลังตำแหน่งปัจจุบัน

---

# Insertion Sort: multiple pass

- ตอนนี้คุณได้เห็นวิธีการทำงานของการเรียงลำดับแบบแทรกในครั้งเดียวแล้ว สไลด์ต่อไปนี้จะแสดงให้เห็นหลายๆ ครั้งเพื่อแสดงให้คุณเห็นว่าการดำเนินการเรียงลำดับแบบแทรกเสร็จสมบูรณ์นั้นทำอย่างไร


---


- แต่ละหมายเลขซ่อนอยู่ใต้ถ้วย ถ้วยจะต้องเรียงลำดับโดยมีค่าต่ำสุดทางด้านซ้าย

<v-switch>
<template #0>


![multipass](/images/chapter8/multipass.png)
- จัดทำรายการข้อมูลที่ต้องการจัดเรียง

</template>

<template #1>

![multipass2](/images/chapter8/multipass2.png)

- ให้ตัวเลขทุกตัวถือว่าอยู่ในรายการที่ไม่ได้มีการจัดเรียงยกเว้นตัวแรก
</template>

<template #2>

![multipass3](/images/chapter8/multipass3.png)

- ในการดำเนินการครั้งแรก (first pass) รายการที่ไม่เรียงลำดับรายการแรกจะถูกแทรกลงในตำแหน่งที่เหมาะสมในรายการที่เรียงลำดับแล้ว
</template>

<template #3>

![multipass4](/images/chapter8/multipass4.png)
- **ดึงรายการที่ไม่เรียงลำดับรายการแรกออกมา**
เปรียบเทียบกับรายการในรายชื่อที่เรียงลำดับแล้ว
และ “เลื่อน” รายการเหล่านี้จนกว่าจะแทรกรายการใหม่เข้าไปในตำแหน่งที่ถูกต้อง

</template>

<template #4>

![multipass5](/images/chapter8/multipass5.png)
- ดึงรายการที่ไม่เรียงลำดับรายการแรกออกมา
**เปรียบเทียบกับรายการในรายชื่อที่เรียงลำดับแล้ว**
และ “เลื่อน” รายการเหล่านี้จนกว่าจะแทรกรายการใหม่เข้าไปในตำแหน่งที่ถูกต้อง
</template>

<template #5>

![multipass6](/images/chapter8/multipass6.png)
- ดึงรายการที่ไม่เรียงลำดับรายการแรกออกมา
เปรียบเทียบกับรายการในรายชื่อที่เรียงลำดับแล้ว
**และ “เลื่อน” รายการเหล่านี้จนกว่าจะแทรกรายการใหม่เข้าไปในตำแหน่งที่ถูกต้อง**
</template>

<template #6>

![multipass7](/images/chapter8/multipass7.png)
- ขณะนี้ดำเนินการเสร็จสิ้นไป 1 รอบ โดยเพิ่มรายการย่อยที่เรียงลำดับไว้ 1 รายการ
</template>

<template #7>

![multipass8](/images/chapter8/multipass8.png)
- ในการดำเนินการครั้งถัดไป รายการที่ไม่เรียงลำดับรายการแรกจะถูกแทรกลงในตำแหน่งที่เหมาะสมในรายการที่เรียงลำดับแล้ว

</template>

<template #8>

![multipass9](/images/chapter8/multipass9.png)
- **ดึงรายการที่ไม่เรียงลำดับรายการแรกออกมา**
เปรียบเทียบกับรายการในรายชื่อที่เรียงลำดับแล้ว
และ “เลื่อน” รายการเหล่านี้จนกว่าจะแทรกรายการใหม่เข้าไปในตำแหน่งที่ถูกต้อง
</template>

<template #9>

![multipass10](/images/chapter8/multipass10.png)
- ดึงรายการที่ไม่เรียงลำดับรายการแรกออกมา
**เปรียบเทียบกับรายการในรายชื่อที่เรียงลำดับแล้ว**
และ “เลื่อน” รายการเหล่านี้จนกว่าจะแทรกรายการใหม่เข้าไปในตำแหน่งที่ถูกต้อง
</template>

<template #10>

![multipass11](/images/chapter8/multipass11.png)
- ดึงรายการที่ไม่เรียงลำดับรายการแรกออกมา
เปรียบเทียบกับรายการในรายชื่อที่เรียงลำดับแล้ว
**และ “เลื่อน” รายการเหล่านี้จนกว่าจะแทรกรายการใหม่เข้าไปในตำแหน่งที่ถูกต้อง**
</template>


<template #11>

![multipass12](/images/chapter8/multipass12.png)
- ขณะนี้ดำเนินการเสร็จสิ้นไป 1 รอบ โดยเพิ่มรายการย่อยที่เรียงลำดับไว้ 1 รายการ
</template>

<template #12>

![multipass13](/images/chapter8/multipass13.png)
- ในการดำเนินการครั้งถัดไป รายการที่ไม่เรียงลำดับรายการแรกจะถูกแทรกลงในตำแหน่งที่เหมาะสมในรายการที่เรียงลำดับแล้ว
</template>

<template #13>

![multipass14](/images/chapter8/multipass14.png)
- **ดึงรายการที่ไม่เรียงลำดับรายการแรกออกมา**
เปรียบเทียบกับรายการในรายชื่อที่เรียงลำดับแล้ว
และ “เลื่อน” รายการเหล่านี้จนกว่าจะแทรกรายการใหม่เข้าไปในตำแหน่งที่ถูกต้อง
</template>

<template #14>

![multipass15](/images/chapter8/multipass15.png)
- ดึงรายการที่ไม่เรียงลำดับรายการแรกออกมา
**เปรียบเทียบกับรายการในรายชื่อที่เรียงลำดับแล้ว**
และ “เลื่อน” รายการเหล่านี้จนกว่าจะแทรกรายการใหม่เข้าไปในตำแหน่งที่ถูกต้อง
</template>

<template #15>

![multipass16](/images/chapter8/multipass16.png)
- ดึงรายการที่ไม่เรียงลำดับรายการแรกออกมา
เปรียบเทียบกับรายการในรายชื่อที่เรียงลำดับแล้ว
**และ “เลื่อน” รายการเหล่านี้จนกว่าจะแทรกรายการใหม่เข้าไปในตำแหน่งที่ถูกต้อง**
</template>

<template #16>

![multipass17](/images/chapter8/multipass17.png)
- ขณะนี้ดำเนินการเสร็จสิ้นไป 1 รอบ โดยเพิ่มรายการย่อยที่เรียงลำดับไว้ 1 รายการ
</template>

<template #17>

![multipass18](/images/chapter8/multipass18.png)
- ในการดำเนินการครั้งถัดไป รายการที่ไม่เรียงลำดับรายการแรกจะถูกแทรกลงในตำแหน่งที่เหมาะสมในรายการที่เรียงลำดับแล้ว
</template>

<template #18>

![multipass19](/images/chapter8/multipass19.png)
- **ดึงรายการที่ไม่เรียงลำดับรายการแรกออกมา**
เปรียบเทียบกับรายการในรายชื่อที่เรียงลำดับแล้ว
และ “เลื่อน” รายการเหล่านี้จนกว่าจะแทรกรายการใหม่เข้าไปในตำแหน่งที่ถูกต้อง
</template>

<template #19>

![multipass20](/images/chapter8/multipass20.png)
- ดึงรายการที่ไม่เรียงลำดับรายการแรกออกมา
**เปรียบเทียบกับรายการในรายชื่อที่เรียงลำดับแล้ว**
และ “เลื่อน” รายการเหล่านี้จนกว่าจะแทรกรายการใหม่เข้าไปในตำแหน่งที่ถูกต้อง
</template>

<template #20>

![multipass21](/images/chapter8/multipass21.png)
- ดึงรายการที่ไม่เรียงลำดับรายการแรกออกมา
เปรียบเทียบกับรายการในรายชื่อที่เรียงลำดับแล้ว
**และ “เลื่อน” รายการเหล่านี้จนกว่าจะแทรกรายการใหม่เข้าไปในตำแหน่งที่ถูกต้อง**
</template>

<template #21>

![multipass22](/images/chapter8/multipass22.png)
- ขณะนี้ดำเนินการเสร็จสิ้นไป 1 รอบ โดยเพิ่มรายการย่อยที่เรียงลำดับไว้ 1 รายการ
</template>

<template #22>

![](/images/chapter8/multipass23.png)
- ในการดำเนินการครั้งถัดไป รายการสุดท้ายที่เหลือที่ไม่เรียงลำดับจะถูกแทรกในตำแหน่งที่เหมาะสมในรายการที่เรียงลำดับแล้ว

</template>

<template #23>

![multipass24](/images/chapter8/multipass24.png)
- **ดึงรายการที่ไม่เรียงลำดับรายการแรกออกมา**
เปรียบเทียบกับรายการในรายชื่อที่เรียงลำดับแล้ว
และ “เลื่อน” รายการเหล่านี้จนกว่าจะแทรกรายการใหม่เข้าไปในตำแหน่งที่ถูกต้อง
</template>

<template #24>

![multipass25](/images/chapter8/multipass25.png)
- ดึงรายการที่ไม่เรียงลำดับรายการแรกออกมา
**เปรียบเทียบกับรายการในรายชื่อที่เรียงลำดับแล้ว**
และ “เลื่อน” รายการเหล่านี้จนกว่าจะแทรกรายการใหม่เข้าไปในตำแหน่งที่ถูกต้อง
</template>

<template #25>

![multipass26](/images/chapter8/multipass26.png)
- ดึงรายการที่ไม่เรียงลำดับรายการแรกออกมา
เปรียบเทียบกับรายการในรายชื่อที่เรียงลำดับแล้ว
**และ “เลื่อน” รายการเหล่านี้จนกว่าจะแทรกรายการใหม่เข้าไปในตำแหน่งที่ถูกต้อง**
</template>

<template #26>

![multipass27](/images/chapter8/multipass27.png)
- ขณะนี้ดำเนินการเสร็จสิ้นไป 1 รอบ โดยรายการของตัวเลขได้เรียงเรียบร้อยแล้ว
</template>
</v-switch>

---

# อัลกอริธึมที่เสร็จสมบูรณ์ของ Insertion Sort

- คำแนะนำในการดำเนินการเรียงลำดับแบบแทรกทั้งหมดสามารถเขียนได้ดังนี้:
1. นำรายการข้อมูลที่ต้องการเรียงลำดับมา
2. ให้รายการย่อยที่ไม่ได้เรียงลำดับประกอบด้วยรายการทั้งหมด ยกเว้นรายการแรก
3. ทำซ้ำขั้นตอน 1-3 (การผ่าน) จนกว่ารายการที่ไม่ได้เรียงลำดับจะว่างเปล่า:
    1. คัดลอกรายการที่ไม่เรียงลำดับรายการแรกลงในค่า
    2. ทำซ้ำขั้นตอน a กับ b โดยเริ่มจากรายการสุดท้ายที่เรียงลำดับแล้วจนกว่าจะไม่มีรายการเหลืออยู่หรือค่าพร้อมที่จะแทรกลงในรายการ:

        a. หากรายการในตำแหน่งปัจจุบันมากกว่าค่า ให้คัดลอกรายการนั้นลงในรายการถัดไป แล้วไปที่รายการก่อนหน้าในรายการ

        b. มิฉะนั้น ค่าก็พร้อมที่จะแทรกลงในรายการแล้ว
    3. คัดลอกค่าลงในรายการหลังตำแหน่งปัจจุบัน

---

# ตัวอย่างการ Sort

- [https://anim.ide.sk/sorting_algorithms_1.php](https://anim.ide.sk/sorting_algorithms_1.php)

- <QRCode value="https://anim.ide.sk/sorting_algorithms_1.php" :size="200" render-as="svg"/>

---
layout: section
---

# Searching

---

# การค้นหา : SEARCHING

- การค้นหาข้อมูลที่ต้องการจากกลุ่มของข้อมูลที่กำหนดให้ก็เป็นอีกการประยุกต์หนึ่งที่ใช้กันมาก มีวิธีการค้นหาข้อมูลหลายวิธีเช่นกัน ขึ้นอยู่กับประเภทและจำนวนของข้อมูลที่เกี่ยวช้อง วิธีการค้นหาที่ใช้กันมากได้แก่
    1. Sequential Search
    2. Binary Search

<div class="w-[600px] mx-auto">

![search concept](/images/chapter8/search_concept.png)
</div>

---

# Linear search

- การค้นหาเชิงเส้นคืออัลกอริทึมที่เกี่ยวข้องกับการตรวจสอบแต่ละรายการในรายการหรือลำดับข้อมูลทีละรายการ (จึงเรียกว่า “เชิงเส้น”) เพื่อดูว่าเป็นรายการที่ถูกต้องหรือไม่
หากคุณมีรายการที่ไม่เรียงตามลำดับ การค้นหาเชิงเส้นเป็นวิธีเดียวที่สมเหตุสมผลในการค้นหาผ่านรายการนั้น
ในสไลด์ถัดไป คุณจะเห็นตัวอย่างวิธีการค้นหาเชิงเส้น

---

# Linear search

- ตัวเลขแต่ละตัวจะซ่อนอยู่ใต้ถ้วย โดยถ้วยจะเรียงกันแบบสุ่ม จากถ้วย ตัวเลขที่ต้องค้นหาคือ 126

<v-switch>

<template #0>

![linear search](/images/chapter8/linear_search.png)
- นำรายการข้อมูลและรายการที่ต้องการค้นหา (รายการค้นหา)
</template>
<template #1>

![linear search2](/images/chapter8/linear_search2.png)
- เริ่มจากรายการแรกในรายการ
</template>
<template #2>

![linear search3](/images/chapter8/linear_search3.png)
- เปรียบเทียบตัวเลขในตำแหน่งปัจจุบันกับเลขที่ต้องการค้นหา
</template>
<template #3>

![linear search4](/images/chapter8/linear_search4.png)
- ถ้าไม่ใช่ตัวเลขที่ต้องการค้นหาให้เปลี่ยนไปตำแหน่งถัดไป
</template>
<template #4>

![linear search5](/images/chapter8/linear_search5.png)

- เปรียบเทียบตัวเลขในตำแหน่งปัจจุบันกับเลขที่ต้องการค้นหา
</template>
<template #5>

![linear search6](/images/chapter8/linear_search6.png)
- ถ้าไม่ใช่ตัวเลขที่ต้องการค้นหาให้เปลี่ยนไปตำแหน่งถัดไป
</template>
<template #6>

![linear search7](/images/chapter8/linear_search7.png)
- เปรียบเทียบตัวเลขในตำแหน่งปัจจุบันกับเลขที่ต้องการค้นหา

</template>
<template #7>

![linear search8](/images/chapter8/linear_search8.png)
- ถ้าไม่ใช่ตัวเลขที่ต้องการค้นหาให้เปลี่ยนไปตำแหน่งถัดไป
</template>
<template #8>

![linear search9](/images/chapter8/linear_search9.png)
- เปรียบเทียบตัวเลขในตำแหน่งปัจจุบันกับเลขที่ต้องการค้นหา
</template>
<template #9>

![linear search10](/images/chapter8/linear_search10.png)
- ถ้าไม่ใช่ตัวเลขที่ต้องการค้นหาให้เปลี่ยนไปตำแหน่งถัดไป
</template>
<template #10>

![linear search11](/images/chapter8/linear_search11.png)
- เปรียบเทียบตัวเลขในตำแหน่งปัจจุบันกับเลขที่ต้องการค้นหา
</template>
<template #11>

![linear search12](/images/chapter8/linear_search12.png)
- ถ้าไม่ใช่เลขที่ต้องการค้นหาให้เปลี่ยนไปตำแหน่งถัดไป
</template>
<template #12>

![linear search13](/images/chapter8/linear_search13.png)
- เปรียบเทียบตัวเลขในตำแหน่งปัจจุบันกับเลขที่ต้องการค้นหา
</template>
<template #13>

![linear search14](/images/chapter8/linear_search14.png)
- ถ้าตัวเลขที่ตำแหน่งปัจจุบันเท่ากับตัวเลขที่ต้องการค้นหา ให้หยุดค้นหา
</template>

</v-switch>

---

# อัลกอริธึมสำหรับ Linear Search

- คำแนะนำในการค้นหาเชิงเส้นสามารถเขียนได้ดังนี้:
1. นำรายการข้อมูลและรายการที่ต้องการค้นหา (รายการค้นหา) ขึ้นมา
2. ทำซ้ำขั้นตอน a-c โดยเริ่มจากรายการแรกในรายการ จนกว่าจะพบรายการที่ต้องการค้นหาหรือจนกว่าจะถึงจุดสิ้นสุดของรายการ

    a. เปรียบเทียบรายการในตำแหน่งปัจจุบันกับรายการที่ต้องการค้นหา

    b. หากรายการในตำแหน่งปัจจุบันเท่ากับรายการที่ต้องการค้นหา ให้หยุดการค้นหา

    c. มิฉะนั้น ให้ไปที่รายการถัดไปในรายการ

---

# ตัวอย่าง Sequential Search


<div class="w-[400px] mx-auto">

<div class="text-center font-bold text-2xl">
Sequential Search
</div>

![sequential search](/images/chapter8/sequential_search.png)

</div>

---

# ตัวอย่าง Sequential Search (2)


<div class="w-[600px] mx-auto">

<div class="text-center font-bold text-2xl">
Sequential Search
</div>


![sequential search2](/images/chapter8/sequential_search2.png)

</div>

---
layout: section
---

# Binary Search

---

# Binary Search

- การค้นหาแบบไบนารีเป็นวิธีการค้นหารายการที่มีประสิทธิภาพมากกว่าการค้นหาแบบเชิงเส้นมาก
อย่างไรก็ตาม คุณสามารถใช้อัลกอริทึมการค้นหาแบบไบนารีได้เฉพาะในกรณีที่ข้อมูลถูกจัดลำดับ เช่น จากน้อยไปมาก
หากข้อมูลที่คุณมีไม่ได้ถูกจัดลำดับ คุณต้องใช้อัลกอริทึมการค้นหาแบบเชิงเส้นหรือเรียงลำดับข้อมูลก่อน


---

# Binary Search

- แต่ละตัวเลขจะซ่อนอยู่ใต้ถ้วย โดยถ้วยจะเรียงตามลำดับ โดยค่าต่ำสุดจะอยู่ทางซ้าย ตัวเลขที่ต้องค้นหาคือ 68

<v-switch>

<template #0>

![binary search](/images/chapter8/binary_search.png)
- นำรายการข้อมูลแบบเรียงลำดับและรายการที่ต้องการค้นหา (รายการค้นหา)
</template>


<template #1>

![binary search2](/images/chapter8/binary_search2.png)
- รักษาช่วงของรายการที่อาจพบรายการที่ต้องการค้นหา
ในขั้นแรก ให้กำหนดช่วงให้เป็นรายการทั้งหมด
- ช่วงจะถูกระบุผ่านดัชนีของรายการแรกและรายการสุดท้ายในช่วง

</template>
<template #2>

![binary search3](/images/chapter8/binary_search3.png)
- ค้นหารายการที่อยู่ตรงกลางของช่วง (รายการจุดกึ่งกลาง)
</template>
<template #3>

![binary search4](/images/chapter8/binary_search4.png)
- เปรียบเทียบรายการกึ่งกลางกับรายการที่คุณกำลังค้นหา

</template>
<template #4>

![binary search5](/images/chapter8/binary_search5.png)
- หากรายการจุดกึ่งกลางมีค่าน้อยกว่ารายการค้นหา ให้เปลี่ยนช่วงเพื่อโฟกัสที่รายการหลังจุดกึ่งกลาง
- รายการจะถูกจัดเรียงตามลำดับ จึงไม่สามารถค้นหารายการค้นหาก่อนจุดกึ่งกลางได้

</template>
<template #5>


![binary search6](/images/chapter8/binary_search6.png)
- ค้นหาไอเท็มที่อยู่ตรงกลางของช่วง (ไอเท็มจุดกึ่งกลาง)
- หากมีจำนวนไอเท็มคู่ ให้เลือกไอเท็มตรงกลางซ้าย

</template>
<template #6>


![binary search7](/images/chapter8/binary_search7.png)
- เปรียบเทียบรายการกึ่งกลางกับรายการที่คุณกำลังค้นหา
</template>
<template #7>

![binary search8](/images/chapter8/binary_search8.png)
- หากรายการจุดกึ่งกลางมีขนาดใหญ่กว่ารายการค้นหา ให้เปลี่ยนช่วงเพื่อโฟกัสที่รายการก่อนจุดกึ่งกลาง
- รายการจะถูกจัดเรียงตามลำดับ จึงไม่สามารถค้นหารายการค้นหาหลังจุดกึ่งกลางได้
</template>
<template #8>


![binary search9](/images/chapter8/binary_search9.png)
- ค้นหาไอเท็มที่อยู่ตรงกลางของช่วง (ไอเท็มจุดกึ่งกลาง)
- หากเหลือไอเท็มเพียงชิ้นเดียว ให้เลือกไอเท็มนี้
</template>
<template #9>

![binary search10](/images/chapter8/binary_search10.png)
- เปรียบเทียบรายการกึ่งกลางกับรายการที่คุณกำลังค้นหา
</template>

<template #10>

![binary search11](/images/chapter8/binary_search11.png)
- หากรายการตรงจุดกึ่งกลางมีค่าเท่ากับรายการที่ค้นหา ให้หยุดค้นหา
</template>

</v-switch>

---

# อัลกอริธึมสำหรับ Binary Search

1. จัดทำรายการข้อมูลและรายการที่ต้องการค้นหา
2. รักษาช่วงของรายการที่อาจพบรายการที่ต้องการค้นหา
    - ในขั้นแรก ให้กำหนดช่วงให้เป็นรายการทั้งหมด

3. ทำซ้ำขั้นตอน a-e จนกว่าคุณจะพบรายการที่ต้องการค้นหาหรือไม่มีรายการอื่นให้ตรวจสอบอีก (ช่วงว่าง):

    a. ค้นหารายการที่อยู่ตรงกลางของช่วง (รายการจุดกึ่งกลาง)

    b. เปรียบเทียบรายการจุดกึ่งกลางกับรายการที่ต้องการค้นหา

    c. หากรายการจุดกึ่งกลางเท่ากับรายการที่ต้องการค้นหา ให้หยุดค้นหา

    d. มิฉะนั้น หากรายการจุดกึ่งกลางน้อยกว่ารายการที่ต้องการค้นหา ให้เปลี่ยนช่วงเพื่อโฟกัสที่รายการหลังจุดกึ่งกลาง

    e. มิฉะนั้น หากรายการจุดกึ่งกลางมากกว่ารายการที่ต้องการค้นหา ให้เปลี่ยนช่วงเพื่อโฟกัสที่รายการก่อนจุดกึ่งกลาง

---

# ตัวอย่าง Binary Search

- [https://www.cs.usfca.edu/~galles/visualization/Search.html](https://www.cs.usfca.edu/~galles/visualization/Search.html)


- <QRCode value="https://www.cs.usfca.edu/~galles/visualization/Search.html" :size="200" render-as="svg"/>

---

# สรุป Linear Search กับ Binary Search

| | Linear Search | Binary Search |
|:-:|:-:|:-:|
|Ordered data (การเรียงลำดับข้อมูล)|ลำดับของรายการในรายการอาจจะจัดลำดับหรือไม่จัดลำดับก็ได้|ลำดับของรายการในรายการจะต้องเรียงลำดับ|
|Number of comparisons (จำนวนครั้งในการเปรียบเทียบ)|ในกรณีที่เลวร้ายที่สุด รายการทั้งหมดในรายการจะถูกเปรียบเทียบกับรายการค้นหาหากคุณเพิ่มจำนวนรายการในรายการเป็นสองเท่า จำนวนสูงสุดของการเปรียบเทียบก็จะเพิ่มเป็นสองเท่าเช่นกัน|การเปรียบเทียบแต่ละรายการกับรายการค้นหาจะลบรายการครึ่งหนึ่งในรายการออกหากคุณเพิ่มจำนวนรายการในรายการเป็นสองเท่า คุณจะต้องเปรียบเทียบอีกครั้งมากที่สุดหนึ่งครั้ง|
|Simplicity of the algorithms (ความเรียบง่ายของอัลกอริธึม)|อัลกอริธึมเขียนได้ง่ายกว่า|อัลกอริทึมจะยาวกว่าและซับซ้อนกว่าในการเขียน|

---
layout: section
---

# การเรียกตัวเอง RECURSION

---

# จำนวนโบนักซี (Fibonacci number) 

- 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
- ตัวเลขในลำดับต่อ ๆ ไปมาจากผลบวกของตัวเลข 2 ตัวก่อนหน้า

$นิยาม\quad F_n = F_{n-1} + F_{n-2}$

$ค่าเริ่มต้น\quad\; F_0 = 0
            \newline\qquad\qquad\quad F_1 = 1$

---

# Iterative definition of factorial


<div class="w-[700px] mx-auto">


![factorial formula](/images/chapter8/factorial_formula.png)


</div>

---

# Pseudocode 

- Algorithm : Iterative factorial

```

Factorial
Input: A positive integer num
    1. Set FactN to 1
    2. Set i to 1
    3. while (i is less than or equal to num)
        3.1  Set FactN to FactN x i 
        3.2  Increment i
       End while
    4. Return FactN
End


```

---

# Pseudocode

- Algorithm : Recursive  factorial

```

Factorial
	Input: A positive integer num
    1. if (num is equal to 0) 
    then
        1.1  return 1
    else
        1.2  return num x Factorial (num – 1)
    End if
	End
```

---

# Recursive definition of factorial


<div class="w-[700px] mx-auto">


![recursive factorial formula](/images/chapter8/recursive_factorial_formula.png)


</div>

---

# Tracing recursive solution to factorial problem

<div class="w-[700px] mx-auto">

![trace recursive formula](/images/chapter8/trace_recursive_formula.png)
</div>

---

# จำนวนโบนักซี (Fibonacci number) 

- 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
- ตัวเลขในลำดับต่อ ๆ ไปมาจากผลบวกของตัวเลข 2 ตัวก่อนหน้า

$นิยาม\quad F_n = F_{n-1} + F_{n-2}$

$ค่าเริ่มต้น\quad\; F_0 = 0
            \newline\qquad\qquad\quad F_1 = 1$

---

# จำนวนโบนักซี (Fibonacci number) 

<div class="w-[400px] mx-auto">

![fibonacci](/images/chapter8/fibonacci.png)

</div>

---

# จำนวนโบนักซี (Fibonacci number) 

<div class="w-[500px] mx-auto">


![fibonacci2](../public/images/chapter8/fibonacci2.png)
</div>
