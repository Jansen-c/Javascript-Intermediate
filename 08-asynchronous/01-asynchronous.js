
// 1. Proses melakukan perintah atau render perintah secara berurutan yang dilakukan secara teratur oleh web browser, jadi setiap perintah dilakukan satu per satu sampai selesai
// 2. Proses melakukan perintah atau render perintah tidak secara berurutan dan bisa bisa melakukan proses perintah yang tidak berurutan, sehingga tidak perlu menunggu proses eksekusi. 
// 3. Bisa, meskipun yang saya baru coba hanya chrome 
// 4. first log dari 1 sampai 5, sedangkan untuk second log semua nya hasilnya 6 sebanyak 5 kali. 
// 5. Karena setTimeout tidak berjalan sampai for loop selesai dieksekusi, sehingga console.log() nya menjadi berbeda. 

for (let i = 1; i <= 5; i++) {
    console.log("first log: ", i); 
    delay(i)
}

function delay(i) {
        setTimeout(() => console.log("second log: ", i++), 100); 
    }