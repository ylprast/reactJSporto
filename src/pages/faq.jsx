import Accordion from 'react-bootstrap/Accordion';
import Footer2 from '../components/footer2';

function FAQPage() {
  return (
    <div className="col-lg-10 col-12" style={{paddingTop: '20px', margin: 'auto'}}>
      <h3>Mengenai Data Pribadi Pengguna</h3>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Dimana saya bisa membaca dan memahami ketentuan perlindungan data pribadi saya di Tukupedia?</Accordion.Header>
        <Accordion.Body style={{textAlign: 'justify'}}>
        Ketentuan perlindungan data pribadi anda di Tukupedia dapat diakses melalui laman Pemberitahuan Privasi. 
        Melalui Pemberitahuan Privasi, Tukupedia telah mencantumkan informasi mengenai perlindungan data pribadi, termasuk informasi cara Tukupedia memperoleh data pribadi anda, tujuan penggunaan data pribadi anda, tujuan pengungkapan data pribadi anda kepada pihak ketiga, hak anda sebagai pemilik data pribadi dan informasi lainnya yang anda butuhkan untuk memahami pemrosesan data pribadi anda di Tukupedia.
        Anda dapat membaca bagian Ringkasan pada Pemberitahuan Privasi Tukupedia untuk dapat memahami ketentuan perlindungan data pribadi Tukupedia dengan lebih mudah dan cepat.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Bagaimana Tukupedia melindungi data pribadi saya untuk memastikan privasi saya tetap terjaga?</Accordion.Header>
        <Accordion.Body style={{textAlign: 'justify'}}>
        Tukupedia berkomitmen penuh dan akan melakukan upaya terbaiknya untuk melindungi data pribadi anda, seperti:
        <ol>
        <li>Memberikan transparansi terhadap pemrosesan data pribadi anda;</li>
        <li>Melakukan pengumpulan data pribadi anda yang hanya sesuai untuk pemenuhan layanan yang kami sediakan dan kami detilkan pada Pemberitahuan Privasi;</li>
        <li>Melakukan pemrosesan data pribadi anda hanya untuk tujuan yang telah kami sampaikan melalui Pemberitahuan Privasi; dan</li>
        <li>Melakukan pemrosesan data pribadi anda sesuai dengan persetujuan yang anda berikan kepada kami dan sesuai dengan batas-batas kewajaran</li>
        </ol>
        Untuk memaksimalkan perlindungan data pribadi, anda juga dapat melakukan tindakan - tindakan pencegahan untuk melindungi akun pribadi dan membaca cara mengamankan akun.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Apakah data pribadi saya akan diproses oleh Pihak Ketiga selain Tukupedia?</Accordion.Header>
        <Accordion.Body style={{textAlign: 'justify'}}>
        Kami selalu berupaya untuk menyediakan layanan terbaik kami kepada anda dan mungkin akan melibatkan Pihak Ketiga jika memang 
        diperlukan. Oleh karena itu, sejauh mana relevan dengan layanan yang disediakan kepada anda, maka kami mungkin bekerja sama dengan 
        pihak ketiga dan melakukan pengungkapan data pribadi anda untuk diproses oleh pihak ketiga dengan tujuan terbatas untuk penyediaan 
        layanan sebagaimana kami detilkan dalam Pemberitahuan Privasi.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Apa saja hak-hak saya terkait perlindungan data pribadi sebagai pengguna Tukupedia?</Accordion.Header>
        <Accordion.Body style={{textAlign: 'justify'}}>
        Sebagai pemilik data pribadi, anda berhak untuk:
        <ol>
        <li>Melakukan pengkinian data pribadi anda yang berada pada Tukupedia.</li>
        <li>Meminta akses untuk memperoleh salinan data pribadi anda.</li>
        <li>Memohonkan penghapusan data pribadi anda.</li>
        <li>Menarik persetujuan anda terhadap pemrosesan data pribadi yang dilakukan oleh Tukupedia.</li>
        <li>Mengajukan penghapusan akun anda di Tukupedia</li>
        </ol>
        Anda dapat mengajukan hak-hak anda diatas dengan cara menghubungi kami melalui Tukupedia Care.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Apa saja perubahan yang terdapat pada Pemberitahuan Privasi ini dan Kapan perubahan ini mulai berlaku?</Accordion.Header>
        <Accordion.Body style={{textAlign: 'justify'}}>
        Pada Pemberitahuan Privasi ini, Kami melakukan beberapa perubahan, yaitu:
        <ol>
        <li>Perubahan Judul Istilah dari yang sebelumnya “Kebijakan Privasi” menjadi “Pemberitahuan Privasi” dilakukan sebagai bentuk harmonisasi pada platform Grup GoTo, sehingga seluruh platform pada Grup GoTo menggunakan istilah yang sama</li>
        <li>Perubahan tampilan Kami mengubah tampilan yang semula statis menjadi format berlapis serta menambahkan bagian Ringkasan, agar pembaca lebih mudah untuk memahami Pemberitahuan Privasi ini dalam waktu singkat.</li>
        <li>Perubahan istilah-istilah Perubahan istilah-istilah dalam Pemberitahuan Privasi ini, termasuk perubahan istilah Kebijakan Privasi menjadi Pemberitahuan Privasi, dilakukan dalam upaya melakukan penyelarasan dengan kebijakan privasi atau pemberitahuan privasi lainnya di Grup GoTo.</li>
        </ol>
        Pemberitahuan Privasi Tukupedia mulai berlaku sejak 2 Desember 2023.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <h3 style={{paddingTop: '20px'}}>Pertanyaan Seputar Promo</h3>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Apakah saya bisa menggabungkan promo Bebas Ongkir dengan promo lainnya?</Accordion.Header>
        <Accordion.Body style={{textAlign: 'justify'}}>
        Mulai 8 Agustus 2023, kamu bisa memilih promo yang ingin digunakan, Cashback atau Bebas Ongkir. Hal ini sebagai upaya Tukupedia untuk menyediakan preferensi berbagai promo Tukupedia serta memudahkan pengguna dalam memilih dan mengkombinasikan promo sesuai dengan kebutuhan.
        Untuk memaksimalkan benefitmu, kamu tetap bisa menggabungkan Promo (di halaman Promo terlampir) dan Bebas Ongkir (di halaman pengiriman).
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Kombinasi promo dan Bebas Ongkir seperti apa yang bisa digunakan?</Accordion.Header>
        <Accordion.Body style={{textAlign: 'justify'}}>
        Kamu bisa menggunakan Bebas Ongkir dengan 1 (satu) Kupon Tukupedia atau 1 (satu) Kupon Toko yang tersedia pada Aplikasi Tukupedia maupun versi Mobile Web.
        Kamu tidak dapat menggabungkan Bebas Ongkir dengan lebih dari 1 (satu) Kupon Tukupedia atau Kupon Toko secara bersamaan. Hal ini berpotensi mengakibatkan perubahan benefit yang diperoleh.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Kenapa saya tidak mendapatkan penawaran promo saat memilih durasi pengiriman?</Accordion.Header>
        <Accordion.Body style={{textAlign: 'justify'}}>
        Kamu bisa memilih promo yang diinginkan dengan mengakses “Pakai promo biar makin hemat!” atau informasi “Yuk, pakai promo biar hemat (jumlah benefit)” yang terdapat pada halaman Keranjang dan Pengiriman.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Kenapa saya tidak melihat/mendapat pilihan promo toko?</Accordion.Header>
        <Accordion.Body style={{textAlign: 'justify'}}>
        Jika tidak ada pilihan penggunaan promo toko, artinya Penjual bersangkutan tidak memiliki promo yang dapat digunakan.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Di mana saya bisa mencari informasi tentang tata cara penggunaan promo tertentu?</Accordion.Header>
        <Accordion.Body style={{textAlign: 'justify'}}>
        Kamu bisa klik Promo Hari ini, kemudian pilih tab Kupon Spesial untuk melihat promo yang sedang berlangsung atau melalui tautan berikut: https://www.tukupedia.com/discovery/deals. Klik banner promo untuk melihat Syarat & Ketentuan penggunaan promonya.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Di mana saya dapat melihat total promo yang saya gunakan?</Accordion.Header>
        <Accordion.Body style={{textAlign: 'justify'}}>
        Total benefit dari promo yang kamu gunakan akan muncul di bagian bawah saat checkout dan di halaman pembayaran.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Footer2/>
    </div>
  );
}

export default FAQPage;