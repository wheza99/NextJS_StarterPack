import ResponsiveContainer from "@/components/ui-custom/responsive-container";
import React from "react";

function PrivacyPolicySection() {
  return (
    <div className="py-48">
      <ResponsiveContainer>
        <div className="flex flex-col gap-6 row-start-2 items-start">
          <h1 className="text-6xl font-bold">Privacy Policy</h1>
          <h1 className="text-xl mb-8">Arka Arsitek</h1>
          <h1 className="text-xl font-bold">Kebijakan Keamanan</h1>
          Arka Arsitek berkomitmen untuk menjaga kerahasiaan dan keamanan data dari
          setiap pengguna aplikasi baik mobile maupun website. Mohon dibaca
          dengan seksama untuk memahami bagaimana kami mengumpulkan data,
          menggunakan, dan menjaganya.
          <h1 className="text-xl font-bold mt-4">Tujuan Pengumpulan data</h1>
          Tujuan dari pengumpulan data adalah sebagai berikut: Pengembangan
          aplikasi dan website Arka Arsitek baik berupa fitur maupun keseluruhan
          aplikasi. Pengembangan model bisnis agar bisa menyesuaikan kebutuhan
          pengguna Aplikasi.
          <h1 className="text-xl font-bold mt-4">
            Pembaruan atas Privacy Policy
          </h1>
          Arka Arsitek dapat menambah, mengurangi, atau mengubah isi dari kebijakan
          privasi. Pengguna agar dapat melihat dan memeriksa secara berkala
          mengenai perubahan terakhir pada halaman "Privacy Policy" ini.
          <p className="mt-8">Last Updated: 12 Dec 2024</p>
        </div>
      </ResponsiveContainer>
    </div>
  );
}

export default PrivacyPolicySection;
