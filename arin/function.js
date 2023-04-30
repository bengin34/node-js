// function makeFile() {
//     console.log('Dosya Olustur')
// }

// makeFile()

function makeFile(callback){
    console.log('Dosya oluştur')
    let file = {
        name:'JSFile'
    }
    callback(file)
}

makeFile(function(myFile){
    console.log(`${myFile.name} oluştr başlandi `)
})