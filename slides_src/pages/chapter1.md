---
title: Introduction
transition: fade
---
# Introduction 

---

# วัตถุประสงค์

- สามารถนิยาม Turing Model และ von Naumann Model ได้
- สามารถอธิบายองค์ประกอบ 3 ส่วนของระบบคอมพิวเตอร์ (hardware, data and
software)
- สามารถอธิบายหัวเรื่องต่างๆ ที่เกี่ยวข้องกับองค์ประกอบทั้ง 3 ส่วนข้างต้นได้
- สามารถอธิบายประวัติความเป็นมาของคอมพิวเตอร์ได้

---
layout: section
---

# 1.1 TURING MODEL

---
layout: image-right
image: /images/chapter1/turing_machine.png
---

# 1.1 TURING MODEL

<div class="w-1/2 mx-auto">

![Alan turing](/images/chapter1/alan_turing.png)
</div>

- แนวคิดของ Universal Computational Device ถูกอธิบายเป็นครั้งแรกโดย Alan
Turing ในปี ค.ศ.1936 ซึ่งเขาได้นําเสนอว่าแบบจําลอง Turing Machine สามารถ
ใช้ในการคํานวณได้แบบเอนกประสงค์
- เป็นแบบจําลองที่เทียบเคียงกับกระบวนการคิดคํานวณของมนุษย์ และทําให้เกิด
กระบวนการเปลี่ยนแปลงในด้านการสร้างเครื่องมือที่ใช้ในการคํานวน

---
layout: two-cols
---

# 1.1.1 Data processors


- Computer คือ Data processor
- เทียบเคียง Computer เสมือนเป็น Black box ซึ่งจะมีความสามารถ 3 อย่างคือ
รับข้อมูลเข้า ประมวลผล และแสดงผลลัพธ์
- ปัญหาของการใช้แบบจําลอง Data processors
    - เครื่องคิดเลข == คอมพิวเตอร์
    - ไม่สามารถระบุได้ว่าคอมพิวเตอร์เป็นแบบเฉพาะงาน (specific-purpose machine) หรือ
แบบทํางานได้หลากหลาย (general-purpose machine)

::right::

<div class="flex flex-col justify-center h-full">

![data_processors](/images/chapter1/data_processors.png)

</div>

---
layout: two-cols
---

# 1.1.2 Programmable data processors

- เพิ่มเติม Program ซึ่งก็คือชุดคําสั่งที่จะควบคุมให้คอมพิวเตอร์ทํางานตามต้องการ
- ภายใต้โมเดลนี้ output data ขึ้นอยู่กับองค์ประกอบ 2 อย่างคือ input data กับ
program หมายความว่า ด้วย input data เดียวกันแต่ใช้โปรแกรมที่ต่างกันย่อม
ได้ผลที่ต่างกันด้วย ในขณะที่ถ้าใช้ program เดียวกันแต่ด้วย input data ที่ต่างกัน
ก็จะได้ผลที่ต่างกันด้วย
- ถ้า input data เดียวกัน และ program เดียวกัน แต่ให้ทํางานหลายๆครั้ง ผลก็คือ
จะได้ output data เหมือนกันทุกครั้ง

::right::


<div class="flex flex-col justify-center h-full p-3">

![Programmable data processors](/images/chapter1/programmable_data_processors.png)
</div>

---
layout: two-cols
---

# 1.1.2.1 Same program, different input data

- โปรแกรมเดียวกัน
(จัดเรียงตัวเลขจากน้อยไปมาก)
ข้อมูลเข้าต่างกัน


::right::

<div class="flex flex-col justify-center h-full p-3">

![Same program, different data](/images/chapter1/same_program_different_data.png)
</div>

---
layout: two-cols
---

# 1.1.2.2 Same input data, different programs

- ข้อมูลเข้าเหมือนกัน
โปรแกรมต่างกัน
(จัดเรียงตัวเลข, บวกเลข, หาค่าต่ําสุด)

::right::

<div class="flex flex-col justify-center h-full p-3">

![Same input data, different program](/images/chapter1/same_data_different_program.png)
</div>

---
layout: quote
---

# 1.1.3 The universal Turing machine

A universal Turing machine, a machine that can do any computation if the appropriate
program is provided, was the first description of a modern computer. 

- A Universal Turing machine คือเครื่องจักรที่สามารถทำการคำนวณอะไรก็ได้ หากมีโปรแกรมที่เหมาะสมถูกป้อนให้ ซึ่งถือเป็นคำอธิบายแรกของคอมพิวเตอร์สมัยใหม่

---
layout: section
---

# 1.2 VON NEUMANN MODEL (ฟอน นอยมันน์ โมเดล)

---
layout: two-cols
---

# 1.2 VONN NEUMANN MODEL

- Turing model เก็บเฉพาะ Data ใน Memory (หน่วยความจํา) ขณะที่ von
Neumann model เก็บ Data และ Program ลงใน Memory
- คอมพิวเตอร์ในปัจจุบันสร้างขึ้นบนพื้นฐานของ von Neumann model (ตั้งชื่อ
ตามนักวิทยาศาสตร์ John von Neumann) โมเดลนี้กําหนดว่าคอมพิวเตอร์
ประกอบด้วยองค์ประกอบ 4 ส่วนคือ
    - หน่วยความจํา (Memory)
    - หน่วยคํานวณตรรกะ (Arithmetic Logic Unit)
    - หน่วยควบคุม (Control Unit)
    - หน่วยรับและแสดงผล (Input/Output)

::right::

<div class="flex flex-col justify-center h-full p-3">

![VON NEUMANN MODEL](/images/chapter1/von_neumann_model.png)
</div>

---
layout: two-cols
---

# 1.2.1 Four subsystems

- Memory เป็นพื้นที่ส่วนที่ใช้เก็บ data และ program ระหว่างที่คอมพิวเตอร์กําลัง
ทํางาน
- Arithmetic Logic Unit (ALU) เป็นส่วนที่ใช้สําหรับทําการคํานวณและทํา logic
operations (เช่น ทําการเปรียบเทียบ ทําการ AND, OR เป็นต้น)
- Control Unit (CU) ทําหน้าที่ควบคุมการทํางานของ Memory, ALU, และ I/O
- Input/Output (I/O): ส่วน input ทําหน้าที่รับ data และ program จากภายนอก
ส่วน output ทําหน้าที่ส่งผลของการประมวลผลสู่ภายนอก

::right::

<div class="flex flex-col justify-center h-full p-3">

![VON NEUMANN MODEL](/images/chapter1/von_neumann_model.png)
</div>


---

# 1.2.2 The stored program concept

- Stored Program Concept: von Neumann model กําหนดว่า program ที่สั่ง
ให้คอมพิวเตอร์ทํางานจะต้องถูกจัดเก็บอยู่ใน memory ในขณะที่คอมพิวเตอร์กําลัง
ประมวลผล ข้อกําหนดนี้แตกต่างอย่างสิ้นเชิงจากสถาปัตยกรรมของคอมพิวเตอร์
สมัยแรกๆ ซึ่งกําหนดว่าเฉพาะ data เท่านั้นที่ต้องอยู่ใน memory
- สถาปัตยกรรมของคอมพิวเตอร์สมัยใหม่มีข้อกําหนดว่าทั้ง data และ program
ต้องอยู่ใน memory ขณะประมวลผล ส่งผลให้ทั้ง data และ program ต้องมี
รูปแบบการจัดเก็บเหมือนกัน ในรูปแบบที่เรียกว่า binary patterns (สตริงของเลข
0 และ 1)

---

# 1.2.3 Sequential execution of instructions

- โปรแกรม (program) ใน von Neumann Model ประกอบด้วยเซตของคําสั่ง
(instruction) ที่มีจํานวนจํากัด การทํางานเริ่มด้วยหน่วยควบคุม (control unit)
ทําการดึง (fetch) คําสั่งครั้งละ 1 คําสั่งจากหน่วยความจํา (memory) จากนั้นทํา
การตีความหมาย (decode) แล้วจึงทําการประมวลผล (execute)
- โดยทั่วไปคําสั่งจะถูกประมวลผลทีละ 1 คําสั่งตามลําดับ (sequential) การจัดเรียง
คําสั่งในโปรแกรม แม้ว่าบางคําสั่งอาจควบคุมการทํางานซ้ํา (loop) ทํางานแบบ
เลือกทํา (selection) แต่ก็ยังถือว่าเป็นการทํางานตามลําดับอยู่

---
layout: section
---

# 1.3 COMPUTER COMPONENTS

---

# 1.3 ส่วนประกอบของคอมพิวเตอร์

- Computer ในปัจจุบันถูกสร้างขึ้นโดยใช้แนวทางจาก von Neumann
model ซึ่งจะมีส่วนประกอบสำคัญ 3 ส่วนคือ

    1. Computer Hardware

    2. Data

    3. Computer Software

---

# 1.3.1 Computer Hardware

- von Neumann model ได้ก าหนดองค์ประกอบพื้นฐาน 4 องค์ประกอบ
ที่คอมพิวเตอร์จะต้องมีคือ 
    1. Memory, 
    2. ALU, 
    3. CU, และ 
    4. I/O 
- ทั้ง 4องค์ประกอบนี้รวมกันเรียกว่า Computer Hardware

- ถึงแม้ว่าในปัจจุบันมีหน่วยความจำหลายประเภทเช่น Hard disk, SSD,
DDR SDRAM หรือมี I/O หลายประเภทเช่น เครื่องรูดบัตร, เครื่องอ่านบาร์
โค๊ด, ลำโพง, ไมโครโฟน แต่ก็ยังถือว่าอุปกรณ์เหล่านี้ล้วนเป็นองค์ประกอบ
ใน 4 ประเภทตาม von Neumann model

---

# 1.3.2 Data

- von Neumann model กำหนดว่าเครื่องคอมพิวเตอร์เป็นเครื่องจักรที่ทำ
หน้าที่ประมวลผลข้อมูล โดยจะรับข้อมูลเพื่อไปประมวลผลและแสดงผลลัพธ์ออกมา

- ในการประมวลผลข้อมูลมีประเด็นสำคัญที่ต้องเข้าใจ 2 เรื่องคือ
    - การจัดเก็บข้อมูล (Storing Data)
    - การจัดรูปแบบข้อมูล (Organizing data)

---

# 1.3.3 Computer Software

- คุณลักษณะสำคัญของโมเดลของทัวริงหรือฟอนนอยมานน์คือแนวคิดเรื่อง "โปรแกรม"
แม้ว่าคอมพิวเตอร์ยุคแรกๆ จะไม่ได้เก็บโปรแกรมไว้ในหน่วยความจำของคอมพิวเตอร์ แต่ก็ยังใช้แนวคิดเรื่องโปรแกรมอยู่ การเขียนโปรแกรมให้กับคอมพิวเตอร์ยุคแรกเหล่านั้นหมายถึงการเปลี่ยนระบบการเดินสายไฟ หรือการเปิดปิดชุดสวิตช์ต่างๆ ดังนั้นการเขียนโปรแกรมจึงเป็นงานที่ต้องทำโดยผู้ปฏิบัติงานหรือวิศวกรก่อนที่กระบวนการประมวลผลข้อมูลจริงจะเริ่มขึ้น

---
layout: two-cols
---

# 1.3.3.1 Programs must be stored

- von Neumann model กำหนดว่าในหน่วยความจำนอกจากจะใช้เก็บข้อมูลแล้วยังจะต้องเก็บโปรแกรมด้วย

::right::

<div class="flex flex-col justify-center h-full p-3">

![Program and Data are stored in memory](/images/chapter1/program_data_memory.png)
</div>

---

# 1.3.3.2 Sequence of instructions

- โปรแกรมคือลำดับของคำสั่งต่างๆ โดยคำสั่งจะทำงานเรียงตามลำดับ
ก่อนหลัง และแต่ละคำสั่งจะดำเนินการกับข้อมูลจำนวนหนึ่ง ดังนั้นคำสั่ง
ในลำดับถัดมาอาจส่งผลกับคำสั่งก่อนหน้า

- ตัวอย่าง

    1. นําข้อมูลตัวที่ 1 เก็บลงในหน่วยความจําตําแหน่งที่ 1
    2. นําข้อมูลตัวที่ 2 เก็บลงในหน่วยความจําตําแหน่งที่ 2
    3. นําเลขในหน่วยความจําตําแหน่งที่ 1 บวกกับเลขในหน่วยความจําตําแหน่งที่ 2
    แล้วนําผลลัพธ์ไปเก็บไว้ในหน่วยความจําตําแหน่งที่ 3
    4. นําผลลัพธ์จากหน่วยความจําตําแหน่งที่ 3 มาแสดงผล

---

# 1.3.3.3 Algorithms

- Algorithms คือกระบวนการแก้ปัญหาอย่างเป็นขั้นเป็นตอน มีลำดับการ
ทำงานและวิธีการที่ชัดเจน

- นักเขียนโปรแกรม (Programmer) มีหน้าที่สร้าง algorithm ที่เหมาะสม
ในการแก้ปัญหาเหล่านั้นให้อยู่ในรูปของชุดคำสั่งต่างๆ

---

# 1.3.3.4 Languages

- ภาษาโปรแกรม คือภาษาที่ programmer ใช้เขียนเพื่อสื่อสารกับเครื่อง
คอมพิวเตอร์ ซึ่งในยุคแรกเรียกว่า “Machine Language” เป็นการเขียน
โปรแกรมโดยใช้เลขฐานสอง
- ระบบงานต่างๆ ในปัจจุบันมีความซับซ้อนมากขึ้น จึงมีภาษาโปรแกรมถูก
พัฒนาขึ้นมาอย่างหลากหลายเพื่อให้เหมาะสมกับการพัฒนาระบบงานแต่
ละประเภท

---

# 1.3.3.5 Software engineering

- เพื่อให้โปรแกรมที่ถูกพัฒนาขึ้นเป็นโปรแกรมที่มีประสิทธิภาพและมี
มาตรฐานแนวคิดของวิศวกรรมซอฟต์แวร์ (software engineering) จึงถูก
พัฒนาขึ้น โดยกำหนดว่าการสร้างโปรแกรมต้องปฏิบัติให้เป็นไปตามกฏ
และระเบียบวิธีการต่างๆ

---

# 1.3.3.6 Operating systems

- เพื่อให้การทำงานของโปรแกรมกับฮาร์ดแวร์เป็นไปอย่างมีประสิทธิภาพ
แนวคิดของการใช้ระบบปฏิบัติการ (operating system) จึงเกิดขึ้น
- ระบบปฏิบัติการจะมีโปรแกรมที่ถูกเรียกใช้งานบ่อยๆ ติดตั้งอยู่และทำ
หน้าที่เป็นตัวกลางในการควบคุมการใช้ทรัพยากรของเครื่องคอมพิวเตอร์

---
layout: section
---

# 1.4 History

---

# 1.4 History

- วิวัฒนาการของคอมพิวเตอร์แบ่งออกเป็น 3 ช่วง
    - Mechanical Machines (ก่อน ค.ศ.1930)
    - Electronic computers (ค.ศ.1930 – 1950)
    - Computer generations (ค.ศ.1950 – ปัจจุบัน)

---
layout: section
---

# 1.4.1 Mechanical Machines (ก่อน ค.ศ.1930)

---
layout: two-cols
---

# Pascaline by Blaise Pascal (แบลซ ปาสกาล)

- มีการพัฒนาคอมพิวเตอร์ออกมาหลายรุ่นซึ่งแตกต่างจากคอมพิวเตอร์สมัยใหม่อย่างมาก ที่สำคัญๆ มีดังนี้
- ในศตวรรษที่ 17 นักปรัชญาและนักคณิตศาสตร์ชาวฝรั่งเศสชื่อ Blaise Pascal ได้คิดค้นเครื่องคิดเลขชื่อว่า Pascaline ที่สามารถทำการ บวก และ ลบได้ ต่อมาในศตวรรษที่ 20 ศาสตราจารย์ Niklaus Wirth ได้สร้างภาษาคอมพิวเตอร์เชิงโครงสร้าง (structured programming) และตั้งชื่อภาษาใหม่นี้ว่าภาษา Pascal เพื่อเป็นเกียรติ


::right::


<div class="flex flex-col items-center justify-center h-full p-3">

<div class="w-[200px]">

![Blaise Pascal](/images/chapter1/pascal.png)
</div>

<div class="w-[350px]">

![Pascaline](/images/chapter1/pascaline.png)
</div>

</div>

---
layout: two-cols
---

# Leibnitz’s Wheel by Gottfried Leibnitz (กอทท์ฟรีด ไลบ์นิซ)

- ตอนปลายศตวรรษที่ 17 นักคณิตศาสตร์ชาวเยอรมันชื่อ Gottfried Leibnitz ได้คิดค้นและสร้างเครื่องคิดเลขที่ซับซ้อนมากขึ้นที่สามารถ ทำการบวก ลบ คูณ และ หารได้ และเขาตั้งชื่อว่า Leibnitz’s Wheel

::right::


<div class="flex flex-col items-center justify-center h-full p-3">


<div class="w-[160px]">

![Gottfried Leibnitz](/images/chapter1/leibnitz.png)
</div>

<div class="w-[350px]">

![Leibnitz Wheel](/images/chapter1/leibnitz_wheel.png)
</div>
</div>

---
layout: two-cols
---

# Punched cards by Joseph-Marie Jacquard (โจเซฟ-มารี ฌาการ์)

- ตอนต้นของศตวรรษที่ 19 นักประดิษฐ์ชื่อ Joseph-Marie Jacquard ได้ประดิษฐ์เครื่องจักรที่ใช้แนวความคิดเกี่ยวกับ storage และ programming โดยใช้ punched cards (เหมือนกับ stored program) เพื่อควบคุมการจัดการเส้นด้ายในการทอผ้า


::right::

<div class="flex flex-col items-center justify-center h-full p-3">


<div class="w-[130px]">

![Joseph Marie](/images/chapter1/joseph_marie.png)
</div>

<div class="w-[200px]">

![Punch cards](/images/chapter1/punch_cards.png)
</div>
</div>

---
layout: two-cols
---

# Charles Babbage (ชาร์ลส์ แบ็บเบจ)

- ปี ค.ศ. 1823 Charles Babbage ได้ประดิษฐ์เครื่อง Difference Engine ซึ่งนอกจากจะสามารถทำการบวก ลบ คูณ หาร ได้แล้วยังสามารถแก้สมการโพลิโนเมียล (polynomial equations) ได้อีกด้วย ต่อมา Charles Babbage ก็ได้ประดิษฐ์เครื่อง Analytical Engine ซึ่งมีลักษณะคล้ายคลึงกับคอมพิวเตอร์สมัยใหม่คือมี 4 องค์ประกอบคือ a mill (modern ALU), a store (memory), an operator (control unit), และ output (input/output)


::right::



<div class="flex flex-col items-center justify-center h-full p-3">

<div class="flex gap-3">

<div class="w-[100px]">

![Babbage](/images/chapter1/babbage.png)
</div>

<div class="w-[200px]">

![Analytical Engine](/images/chapter1/analytical_engine.png)

</div>
</div>

<div class="w-[200px]">

![Difference Engine](/images/chapter1/difference_engine.png)

</div>
</div>


---
layout: two-cols
---

# Herman Hollerith (เฮอร์แมน ฮอลเลอริธ)

- ปี ค.ศ. 1890 Herman Hollerith ได้ออกแบบและสร้าง programmer machine ที่สามารถ อ่าน (read) แจงนับ (tally) และเรียงลำดับ (sort) ข้อมูลที่จัดเก็บใน punched cards

<div class="w-[300px] mx-auto">

![Punch card](/images/chapter1/punch_card.png)
</div>

::right::

<div class="flex flex-col items-center justify-center h-full p-3">


<div class="w-[300px]">

![Herman Hollerith](/images/chapter1/herman_hollerith.png)
</div>

</div>

---
layout: section
---

# 1.4.2 Electronic computers

---

- ช่วงระหว่างปี 1930-1950 นักวิทยาศาสตร์ได้ผลิตคอมพิวเตอร์ขึ้นเป็นจำนวนมาก ซึ่งนักวิทยาศาสตร์เหล่านี้ถือเป็นผู้บุกเบิกอุตสาหกรรมอิเล็กทรอนิกส์คอมพิวเตอร์สมัยใหม่ 
- คอมพิวเตอร์เครื่องแรกๆของระยะนี้ยังไม่ได้เก็บโปรแกรมไว้ในหน่วยความจำ คำสั่งทั้งหมดกระทำจากภายนอก คอมพิวเตอร์ที่โดดเด่นในช่วงนี้มี 5 เครื่องด้วยกันคือ

    1. ปี ค.ศ.1939: ABC (Atanasoff Berry Computer) เป็น specific-purpose computer ที่ออกแบบมาเพื่อแก้ระบบสมการที่ตัวแปรมีกำลังเป็นหนึ่ง (system of linear equations) ถูกค้นคว้าโดย John Vincent Atanasoff และ Clifford Berry

<div class="flex gap-3 justify-center items-center">

<div class="w-[280px]">

![Atanasoff Berry Computer](/images/chapter1/atanasoff_berry_computer.png)
</div>

<div class="flex flex-col items-center justify-center w-[300px]">

![Atanasoff Berry](/images/chapter1/atanasoff_berry.png)

<div>
John Vincent Atanasoff
</div>
</div>

<div class="flex flex-col items-center justify-center w-[300px]">

![Clifford Berry](/images/chapter1/clifford_berry.png)

<div>
Clifford Berry
</div>
</div>
</div>

---

2. และในเวลาเดียวกันนักคณิตศาสตร์ชาวเยอรมันชื่อ Konrad Zuse ได้ออกแบบเครื่องจักรอเนกประสงค์ (general-purpose machine) ชื่อ Z1

<div class="flex gap-3 justify-center items-center">

<div class="w-[400px]">

![Z1](/images/chapter1/z1.png)
</div>

<div class="flex flex-col items-center justify-center w-[200px]">


![Konrad Zuse](/images/chapter1/konrad_zuse.png)

<div>
Konrad Zuse
</div>
</div>

</div>

---

3. ปี ค.ศ.1930: กองทัพเรือสหรัฐร่วมกับบริษัทไอบีเอ็มได้ร่วมกันให้การสนับสนุนโครงการที่มหาวิทยาลัยฮาวาร์ดตามแนวคิดของศาสตราจารย์ Howard Aiken เพื่อสร้างคอมพิวเตอร์ขนาดใหญ่ชื่อ Mark I คอมพิวเตอร์เครื่องนี้ใช้ทั้ง electrical และ mechanical components

<div class="flex gap-3 justify-center items-center">

<div class="w-[400px]">

![Mark I](/images/chapter1/mark1.png)
</div>

<div class="flex flex-col items-center justify-center w-[200px]">



![Howard Aiken](/images/chapter1/howard_aiken.png)
<div>
Howard Aiken
</div>
</div>

</div>

---

4. ในประเทศอังกฤษ ศาสตราจารย์ Alan Turing ได้คิดค้นและสร้างเครื่องคอมพิวเตอร์ชื่อ Colossus ที่ออกแบบเพื่อถอดรหัส Enigma ของเยอรมัน (German Enigma Code)

<div class="flex gap-3 justify-center items-center">

<div class="w-[400px]">

![Colossus](/images/chapter1/colossus.png)
</div>

<div class="flex flex-col items-center justify-center w-[180px]">



![Alan Turing](/images/chapter1/alan_turing2.png)
<div>
Alan Turing
</div>
</div>

</div>

---

5. ปี ค.ศ.1946: เครื่องคอมพิวเตอร์อเนกประสงค์เครื่องแรกที่เป็น electronic computer ได้รับการสร้างขึ้นสำเร็จโดย John Mauchly และ J. Presper Eckert และมีชื่อว่า ENIAC (Electronic Numerical Integrator and Calculator) ประกอบด้วยหลอดสุญญากาศจำนวน 18,000 หลอด ยาว 100 ฟุต สูง 10 ฟุต และหนัก 30 ตัน

<div class="flex gap-3 justify-center items-center">

<div class="w-[400px]">

![Eniac](/images/chapter1/eniac.png)
</div>

<div class="flex flex-col items-center justify-center w-[150px]">

![John Mauchly](/images/chapter1/john_mauchly.png)

<div>
John Mauchly
</div>
</div>

<div class="flex flex-col items-center justify-center w-[150px]">


![J. Presper Eckert](/images/chapter1/j_presper_eckert.png)
<div>
J. Presper Eckert
</div>
</div>
</div>

---

- คอมพิวเตอร์ทั้งห้าที่กล่าวมาใช้หน่วยความจำเก็บข้อมูลเท่านั้น การโปรแกรมทำจากภายนอกโดยใช้ wires และ switches ในช่วงเวลานี้เองที่ von Neumann ได้เสนอให้ทั้งโปรแกรมและข้อมูลควรจะเก็บอยู่ในหน่วยความจำ ด้วยเหตุนี้ทำให้ทุกครั้งที่เราใช้คอมพิวเตอร์ในการทำงานใดก็ตาม เราเพียงแต่เปลี่ยนโปรแกรมเท่านั้น
- ค.ศ.1950: คอมพิวเตอร์เครื่องแรกที่สร้างขึ้นโดยใช้ von Neumann model โดยสร้างขึ้นที่มหาวิทยาลัยเพนซิลวาเนีย สหรัฐอเมริกา มีชื่อว่า EDVAC เวลาเดียวกัน ที่มหาวิทยาลัยแคมบริดจ์ ประเทศอังกฤษก็ได้สร้างคอมพิวเตอร์ชื่อ EDSAC โดยนักวิทยาศาสตร์ชื่อ Maurice Wilkes

<div class="flex gap-3 justify-center items-center">


<div class="flex flex-col items-center justify-center w-[280px]">

![EDVAC](/images/chapter1/edvac.png)

<div>
John von Neumann<br/>in front of EDVAC 

</div>
</div>

<div class="flex flex-col items-center justify-center w-[280px]">


![EDSAC](/images/chapter1/edsac.png)
<div>
Maurice Wilkes and Bill Renwick<br/> in front of EDSAC

</div>
</div>
</div>

---
layout: section
---

# 1.4.3 Computer generations

---

- เครื่องคอมพิวเตอร์ที่สร้างขึ้นหลังจากปี ค.ศ.1950 จะสร้างโดยยึด von Neumann model เป็นหลัก เครื่องคอมพิวเตอร์ที่สร้างขึ้นมีความเร็วมากขึ้น ขนาดเล็กลง และราคาก็ถูกลง นักประวัติศาสตร์ได้แบ่งช่วงเวลาการพัฒนาออกเป็น 5 ช่วงเวลา (generations) โดยอาศัยการเปลี่ยนทางด้านฮาร์ดแวร์และซอฟท์แวร์เป็นหลัก แต่ model ไม่เปลี่ยนแปลง

    - ยุคที่ 1 ยุคหลอดสุญญากาศ (Vacuum tubes) ค.ศ.1950 – 1959
    - ยุคที่ 2 ยุคทรานซิสเตอร์ (Transistor) ค.ศ.1959 – 1965
    - ยุคที่ 3 ยุควงจรรวม (Integrated Circuit) ค.ศ.1965 – 1975
    - ยุคที่ 4 ยุคไมโครคอมพิวเตอร์ (Microcomputer) ค.ศ.1975 – 1985
    - ยุคที่ 5 ยุคของมัลติมีเดีย (Multimedia) ค.ศ.1985 – ปัจจุบัน

---

# 1.4.3.1 Vacuum tubes

- ยุคที่ 1 (ค.ศ.1950 – 1959) เริ่มผลิตคอมพิวเตอร์เชิงการค้า การใช้จะถูกจำกัดอยู่ในห้อง จะมีเฉพาะ operator และผู้เชี่ยวชาญเท่านั้นที่จะเข้าถึงได้ เครื่องมีขนาดใหญ่ มีน้ำหนักมาก ใช้หลอดสุญญากาศเป็น electronic switches เฉพาะองค์กรใหญ่ๆเท่านั้นที่จะสามารถเป็นเจ้าของได้

<div class="mx-auto w-[400px]">

![vacuum tube](/images/chapter1/vacuum_tube.png)
</div>

---

# 1.4.3.2 Transistor

- ยุคที่ 2 (ค.ศ.1959 – 1965) ใช้ transistor แทนหลอดสุญญากาศ ทำให้ตัวเครื่องมีขนาดเล็กลง องค์กรขนาดกลางและขนาดเล็กสามารถเป็นเจ้าของได้ ภาษาคอมพิวเตอร์ระดับสูง 2  ภาษาที่ถูกพัฒนาขึ้นในช่วงนี้คือภาษา FORTRAN ภาษา COBOL ทำให้งานด้านโปรแกรมถูกแยกมาจาก operator อย่างสิ้นเชิง

<div class="mx-auto w-[400px]">

![Transistor](/images/chapter1/transistor.png)
</div>

---

# 1.4.3.3 Integrated Circuit

- ยุคที่ 3 (ค.ศ.1965 – 1975) มีการคิดค้นและสร้าง integrated circuit (IC: ซึ่งประกอบด้วย transistors, wiring, และองค์ประกอบอื่นใส่ลงใน chip) ทำให้ขนาดเล็กลง ราคาก็ถูกลงมาก เครื่องมินิคอมพิวเตอร์เริ่มผลิตและซื้อขาย มีการพัฒนาและใช้ซอฟท์แวร์สำเร็จรูปแทนที่จะเขียนโปรแกรมเอง ก่อให้เกิดอุตสาหกรรมซอฟท์แวร์มากขึ้น

<div class="mx-auto w-[400px]">

![ic](/public/images/chapter1/ic.png)
</div>

---

# 1.4.3.4 Microcomputer

- ยุคที่ 4 (ค.ศ.1975 – 1985) เริ่มมีการผลิต microcomputer เครื่อง desktop calculator เครื่องแรกสร้างขึ้นในปี ค.ศ. 1975 ด้วยความก้าวหน้าทางอุตสาหกรรมอิเล็คทรอนิคส์ ทำให้คอมพิวเตอร์ทั้งเครื่องสามารถสร้างขึ้นบน circuit board แผ่นเล็กๆเพียงแผ่นเดียว ขณะเดียวกันการพัฒนาเครือข่ายคอมพิวเตอร์ (computer networks) ก็เกิดขึ้นในช่วงนี้

<div class="mx-auto w-[400px]">

![Mainboard](/images/chapter1/mainboard.png)
</div>

---

# 1.4.3.5 Multimedia

- ยุคที่ 5 (ค.ศ.1985 – ปัจจุบัน) เป็นการเปิดศักราชของการพัฒนาคอมพิวเตอร์อย่างกว้างขวาง มีการผลิตคอมพิวเตอร์ประเภท laptop และ palmtop ออกสู่ตลาด มีการพัฒนาและปรับปรุงประสิทธิภาพของหน่วยความจำสำรองเช่น CD-ROM, DVD และมีการใช้อย่างแพร่หลาย มีการพัฒนาข้อมูลประเภทสื่อผสม (multimedia) มีการสร้างระบบเสมือนจริง (virtual reality)

<div class="mx-auto w-[400px]">

![Multimedia](/images/chapter1/multimedia.png)
</div>

---

# 1.5 วิทยาการคอมพิวเตอร์

- การศึกษาศาสตร์ทางด้านวิทยาการคอมพิวเตอร์แบ่งออกเป็น 2 กลุ่มคือ

    1. การศึกษาด้านระบบ (การพัฒนาทาง HW และ SW) เช่น computer architecture, computer networking, security issues, operating systems, algorithms, programming
    2. ด้านการประยุกต์ (เกี่ยวกับการนำคอมพิวเตอร์ไปใช้) เช่น databases, artificial intelligence
