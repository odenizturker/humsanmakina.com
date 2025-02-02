import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-10 bg-base-100">
      <div className="text-center lg:text-left">
        <h2 className="text-4xl font-bold mb-4 text-primary">İletişim</h2>
        <p className="text-lg text-neutral">
          Deri Organize İhtisas Bölgesi
          <br />
          15. Sk. No:17, 20240
          <br />
          Honaz, Denizli, Türkiye
        </p>

        <div className="border-t border-gray-300 my-4 w-1/2 mx-auto lg:mx-0"></div>

        <h3 className="text-xl text-primary font-semibold">Saatler</h3>
        <p className="text-neutral">Pazartesi—Cuma</p>
        <p className="text-neutral">9:00—17:00</p>

        <div className="border-t border-gray-300 my-4 w-1/2 mx-auto lg:mx-0"></div>

        <h3 className="text-xl font-semibold text-primary">Telefon</h3>
        <p className="text-neutral">+90 (258) 816 3000</p>

        <div className="border-t border-gray-300 my-4 w-1/2 mx-auto lg:mx-0"></div>

        <h3 className="text-xl font-semibold text-primary">E-Mail</h3>
        <p className="text-neutral">
          <a href="mailto:info@humsanmakina.com">info@humsanmakina.com</a>
        </p>
      </div>

      <div className="w-full lg:w-[500px] h-[350px]">
        <iframe
          title="Hümsan Makine Konum"
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.1178643813914!2d29.383511528165144!3d37.86417033633716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c71d014f4f78b1%3A0xe4b01ce2ca63dd90!2sH%C3%BCmsan%20Makine%20Otomasyon%20Sanayi%20Ticaret%20Limited%20%C5%9Eirketi!5e1!3m2!1str!2sde!4v1738442483258!5m2!1str!2sde"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default Contact