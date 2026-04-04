export default function Home() {
  return (
    <div className="min-h-screen scroll-smooth bg-white text-[#1a1a1a]">
      <nav className="fixed top-0 z-50 h-20 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <span className="font-serif text-2xl font-bold tracking-tighter text-[#4a3728]">
            SUMOTEL
          </span>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#about" className="text-sm font-medium hover:text-[#8b6e4e]">
              เกี่ยวกับเรา
            </a>
            <a href="#rooms" className="text-sm font-medium hover:text-[#8b6e4e]">
              ห้องพัก
            </a>
            <a href="#reviews" className="text-sm font-medium hover:text-[#8b6e4e]">
              รีวิว
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-[#8b6e4e]">
              ติดต่อเรา
            </a>
            <a
              href="#contact"
              className="rounded-sm bg-[#4a3728] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#5d4634]"
            >
              จองตอนนี้
            </a>
          </div>
        </div>
      </nav>

      <section className="relative flex h-screen items-center overflow-hidden pt-20">
        <img
          src="/Img5.jpg"
          alt="SUMOTEL Hero"
          className="absolute inset-0 h-full w-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-white sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="mb-6 font-serif text-5xl leading-tight md:text-7xl">
              พักผ่อนสบายๆ <br />
              <span className="italic">ในบรรยากาศเป็นกันเอง</span>
            </h1>
            <p className="mb-10 text-lg font-light leading-relaxed text-gray-200 md:text-xl">
              ห้องพักสะอาด ดีไซน์เรียบง่าย พร้อมสีสันสดใสที่ทำให้วันพักผ่อนของคุณไม่จำเจ
              พบความสุขง่ายๆ ได้ที่ SUMOTEL
            </p>
            <a
              href="#contact"
              className="inline-flex w-max items-center justify-center gap-2 rounded-sm bg-[#8b6e4e] px-8 py-4 font-medium text-white transition hover:bg-[#a6845e]"
            >
              สำรวจห้องพักของเรา
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#8b6e4e]">
              The Experience
            </span>
            <h2 className="font-serif text-4xl text-[#1a1a1a] md:text-5xl">
              พื้นที่ใช้สอยที่คัดสรรมาอย่างดี
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              {
                title: "สะอาดและเป็นส่วนตัว",
                desc: "เราให้ความสำคัญเรื่องความสะอาดเป็นอันดับหนึ่ง เพื่อให้คุณพักผ่อนได้อย่างสบายใจเหมือนอยู่บ้านตัวเอง",
                img: "/Img2.jpg",
              },
              {
                title: "ที่พัก 2 ชั้น บรรยากาศดี",
                desc: "ตัวอาคารสองชั้นแบ่งสัดส่วนชัดเจน รับลมและแสงแดดธรรมชาติ ให้ความรู้สึกโปร่งโล่ง ไม่แออัด",
                img: "/Img1.jpg",
              },
              {
                title: "6 ห้อง 6 สไตล์",
                desc: "เรามีห้องพักทั้งหมด 6 ห้อง โดยแต่ละห้องจะมีสีสันที่แตกต่างกันไป ให้คุณได้เลือกพักตามสไตล์ที่ชอบ",
                img: "/Img13.jpg",
              },
            ].map((item) => (
              <article key={item.title}>
                <div className="mb-6 aspect-[4/5] overflow-hidden bg-gray-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="mb-3 font-serif text-2xl">{item.title}</h3>
                <p className="font-light leading-relaxed text-gray-500">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="rooms" className="scroll-mt-24 bg-[#f8f5f2] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#8b6e4e]">
                Our Rooms
              </span>
              <h2 className="font-serif text-4xl md:text-5xl">ห้องพักของเรา</h2>
            </div>
            <p className="max-w-sm font-light text-gray-500">
              ห้องพักขนาดกำลังดี เดินทางสะดวก และเน้นความเรียบง่าย
              จะมาพักเดี่ยวหรือมาเป็นกลุ่มก็พร้อมรองรับด้วยมิตรภาพ
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="aspect-[4/5] overflow-hidden bg-gray-100 md:h-[600px] md:aspect-auto">
              <img
                src="/Img6.jpg"
                alt="Room 1"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-rows-2 gap-6">
              <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                <img
                  src="/Img12.jpg"
                  alt="Room 2"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                <img
                  src="/img8.jpg"
                  alt="Room 3"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="scroll-mt-24 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#8b6e4e]">
              Guest Stories
            </span>
            <h2 className="font-serif text-4xl md:text-5xl">เสียงตอบรับจากผู้เข้าพัก</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "คุณสมชาย",
                role: "นักเดินทาง",
                text: "การพักผ่อนที่นี่วิเศษมาก ห้องพักสะอาดและดีไซน์สวยงามมาก พนักงานบริการดีเยี่ยม ให้ความรู้สึกเหมือนอยู่บ้านจริงๆ",
              },
              {
                name: "คุณวิภา",
                role: "นักออกแบบภายใน",
                text: "ประทับใจการตกแต่งที่ใส่ใจทุกรายละเอียด แสงสว่างในห้องดีมาก และเตียงนอนนุ่มสบายที่สุดเท่าที่เคยพักมา",
              },
              {
                name: "คุณกิตติ",
                role: "บล็อกเกอร์ท่องเที่ยว",
                text: "บรรยากาศโดยรอบเงียบสงบ เหมาะกับการมาพักผ่อนชาร์จพลัง แนะนำเลยครับสำหรับใครที่มองหาที่พักคุณภาพ",
              },
            ].map((review, idx) => (
              <article
                key={review.name}
                className="flex flex-col items-center border border-gray-100 bg-[#fafafa] p-8 text-center"
              >
                <p className="mb-4 text-[#8b6e4e]">★★★★★</p>
                <p className="mb-8 font-light italic leading-relaxed text-gray-600">
                  "{review.text}"
                </p>
                <img
                  src="/img11.jpg"
                  alt={review.name}
                  className="mb-3 h-12 w-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <h4 className="font-medium">{review.name}</h4>
                <span className="text-xs uppercase tracking-wider text-gray-400">
                  {review.role}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5f2] py-24 text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-8 font-serif text-4xl text-[#1a1a1a] md:text-6xl">
            พร้อมที่จะจองการเข้าพักของคุณหรือยัง?
          </h2>
          <p className="mb-12 text-lg font-light text-gray-500">
            มาร่วมสร้างความทรงจำที่ลืมไม่ลงกับเรา
            ทุกรายละเอียดถูกคัดสรรมาเพื่อความสะดวกสบายและแรงบันดาลใจของคุณ
          </p>
          <a
            href="#contact"
            className="inline-block rounded-sm bg-[#4a3728] px-12 py-5 font-medium text-white shadow-xl transition hover:bg-[#5d4634]"
          >
            ตรวจสอบห้องว่างและจองที่พัก
          </a>
        </div>
      </section>

      <section id="location" className="scroll-mt-24 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-[#8b6e4e]">
              Our Location
            </span>
            <h2 className="font-serif text-4xl text-[#1a1a1a]">ที่ตั้งของเรา</h2>
          </div>
          <div className="h-[450px] w-full overflow-hidden rounded-sm border border-gray-100 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d733.1215623693508!2d102.66350198102893!3d14.432165768674805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311bcf72e5c06fbb%3A0x3f71c1c743ee8864!2z4Lir4LmJ4Lit4LiH4Lie4Lix4LiBIFNVTU9URUw!5e0!3m2!1sth!2sth!4v1775184443138!5m2!1sth!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer id="contact" className="scroll-mt-24 bg-[#1a1a1a] pb-10 pt-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-4">
            <div>
              <span className="mb-6 block font-serif text-2xl font-bold tracking-tighter">
                SUMOTEL
              </span>
              <p className="text-sm font-light leading-relaxed text-gray-400">
                บริการห้องพักสะอาด ปลอดภัย ในราคาที่เป็นมิตร
              </p>
            </div>
            <div>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-widest">การติดต่อ</h4>
              <ul className="space-y-3 text-sm font-light text-gray-400">
                <li>โทร: 098-181-5097</li>
                <li><a href="https://www.facebook.com/share/17X3oPVfYr/?mibextid=wwXIfr">Facebook: Sumotel บริการห้องพักรายวัน</a></li>
                <li>ต.หนองบัว อ.ปะคำ จ.บุรีรัมย์, ประเทศไทย</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-widest">เมนู</h4>
              <ul className="space-y-3 text-sm font-light text-gray-400">
                <li>
                  <a
                    href="#about"
                    className="inline-block transition duration-200 hover:text-white active:scale-95"
                  >
                    เกี่ยวกับเรา
                  </a>
                </li>
                <li>
                  <a
                    href="#rooms"
                    className="inline-block transition duration-200 hover:text-white active:scale-95"
                  >
                    ห้องพัก
                  </a>
                </li>
                <li>
                  <a
                    href="#reviews"
                    className="inline-block transition duration-200 hover:text-white active:scale-95"
                  >
                    รีวิว
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-widest">ติดตามเรา</h4>
              <p className="text-sm font-light text-gray-400">
                Facebook / Phone Number
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-xs font-light text-gray-500">
              © 2026 SUMOTEL. สงวนลิขสิทธิ์ทั้งหมด
            </p>
            <div className="flex gap-6 text-xs font-light text-gray-500">
              <a href="#" className="hover:text-white">
                นโยบายความเป็นส่วนตัว
              </a>
              <a href="#" className="hover:text-white">
                ข้อกำหนดการใช้งาน
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
