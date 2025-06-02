---
title: Lab - Basic Git
transition: fade
---

# Lab - Basic Git

---

# 🎯 Git คืออะไร?

- Git เป็นเทคโนโลยีที่สามารถใช้ติดตามการเปลี่ยนแปลงของโปรเจค และช่วยให้คนหลายๆคนสามารถทำงานร่วมกันในโปรเจคนี้ได้

- โดยตัวเวอร์ชันของโปรเจคจะถูกควบคุมโดย Git ในแต่ละโปรเจคจะประกอบไปด้วยโฟลเดอร์หลายๆโฟลเดอร์ที่มีไฟล์หลายๆไฟล์อยู่ข้างใน และ Git ยังสามารถติดตามการเปลี่ยนแปลงของไฟล์หลายๆไฟล์ในโปรเจคนั้นๆได้อีกด้วย

- ข้อดีก็คือทำให้เราสามารถแบ่งงานที่เราทำอยู่เป็นหลายๆเวอร์ชันได้ ดังนั้นเราจึงเรียก Git ว่าเป็น <span v-mark.underline.yellow>version control system</span>

<div class="flex items-start justify-start gap-3">

- Git ถูกสร้างขึ้นมาโดย Linus Torvalds ซึ่งถูกนำไปใช้ในการทำโปรเจคของ Software ขนาดใหญ่ ที่มีชื่อว่า Linux kernel และยิ่งไปกว่านั้น Git ยังสามารถถูกนำไปใช้กับไฟล์ได้อีกหลากหลายประเภท ซึ่งถูกนำไปใช้กับโปรเจคอื่นๆอย่างแพร่หลาย

<div v-mark.box.yellow class="w-[300px] flex flex-col items-center ">

![Linus torvalds](/images/lab_git/linus_torvalds.png)
<div>Linus Torvalds</div>
</div>
</div>

---

# การติดตั้ง Git

## Git for Windows :

<div class="w-[400px] mx-auto">

![Git SCM](/images/lab_git/gitscm.png)

Git SCM (Source code management) 
</div>

---
layout: two-cols
---

1. Download ตัวติดตั้ง จากหน้าเวบ
    - Windows
    - Linux
    - macOS




::right::


<div class="w-[400px]">


![Git Download](/images/lab_git/git_download.png)
</div>
---
layout: two-cols
---

2. เปิดตัวติดตั้ง

::right::


<div class="w-[400px]">

![Git Installer](/images/lab_git/installer.png)
</div>

---
layout: two-cols
---

3. กด Install 

::right::

<div class="w-[400px]">

![Install Git](/image/lab_git/install_git.png)
</div>
---

# Linux

1. ติดตั้งโดย command line

```bash
sudo apt-get install git
```

---
layout: two-cols
---

# ทดสอบว่าติดตั้งสำเร็จ

1. เปิด Powershell 
2. แล้วพิมพ์ git แล้วกด Enter

```shell
git
```

3. จะได้ผลลัพธ์ดังรูป

::right::

![Test install](/images/lab_git/test_install.png)

---

# Config name and email

1. เปิด command line

2. ใส่ ชื่อ กับ email ภายใน &quot;&nbsp;&quot;

```bash
git config --global user.name "Krit Chomaitong"
git config --global user.email "abc@email.com"
```

---

<Section icon="📚" title="การประยุกต์ใช้ Git">
    <h3>ทำ Portfolio</h3>

```bash
Fullname: Krit
Gender: Male
Birthday: 1971-07-24
Street:	904 Prairie Trail
City/Town:	Austin
State/Province/Region:	Texas
Zip/Postal Code:	78758
Country:	United States
```

</Section>

---

# สร้าง Folder 

1. สร้าง folder สำหรับเก็บไฟล์

```bash
mkdir portfolio
```

2. เข้าไปใน folder

```bash
cd portfolio
```

3. 


---

<!-- <Section icon="📚" title="Git เหมือนกับ&nbsp;&quot;ตู้เซฟสำหรับไฟล์&quot;">
    <h3>🎮 เปรียบเทียบกับเกมส์</h3>
       <p><strong>Git = ระบบเซฟเกมส์ที่ทรงพลัง!</strong></p>
       <ul>
           <li>🎯 <strong>Save Point</strong> = Commit (จุดเซฟ)</li>
           <li>🔄 <strong>Load Game</strong> = Checkout (ย้อนกลับ)</li>
           <li>📋 <strong>Save List</strong> = Git Log (ดูประวัติ)</li>
           <li>🌟 <strong>New Game+</strong> = Branch (แยกสาย)</li>
       </ul>
</Section> -->