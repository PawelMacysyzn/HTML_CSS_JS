// info from:
// https://www.google.com/search?q=co+to+jest+callback+js&sca_esv=561326209&rlz=1C1GCEU_en-gbSE1070SE1070&tbm=vid&sxsrf=AB5stBjYsS841gbS0zjDng_9Sld4L2zm2Q:1693406829194&source=lnms&sa=X&ved=2ahUKEwi6mo6E0ISBAxW1cPEDHZKqDKsQ_AUoAXoECAIQAw&biw=2133&bih=1025&dpr=0.9#fpstate=ive&vld=cid:45c3b562,vid:HMfJNMOf9Bc
// w skrocie jest to funkcja jako parametr

function someFunction(callback) {
    // console.log(param)
    callback()
}

const a = 'blah'
const b = function () {
    console.log('b')
}

// someFunction(a)
someFunction(b)