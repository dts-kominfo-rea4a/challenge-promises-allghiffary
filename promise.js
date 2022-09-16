const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// const promiseOutput = null;

const promiseOutput = (params) => {
  // Hasil akhir dari fungsi ini adalah dengan
  // mengembalikan Promise
  return new Promise((resolve, reject) => {
    // Kondisi gagal
    if (params === "marah") {
      resolve(muter("marah"));
    }else if(params === "tidak marah") {
      resolve(muter("tidak marah"));
    }
    // Kondisi terpenuhi
    else {
      reject("Gagal");
    }
  });
};

async function muter(parameter) {
  try {
    const bioskop1 = await promiseTheaterIXX();
    const bioskop2 = await promiseTheaterVGC();
    const push_bioskop = [];
    push_bioskop.push(...bioskop1, ...bioskop2);

    // console.log(push_bioskop);
    // console.log(push_bioskop.length);
    let marah = 0;
    let tidak_marah = 0;
    for (let i = 0; i < push_bioskop.length; i++) {
      if (push_bioskop[i]["hasil"] == "marah") {
        marah++;
      }
      if (push_bioskop[i]["hasil"] == "tidak marah") {
        tidak_marah++;
      }
      // console.log(push_bioskop[i]["hasil"]);
    }
    if(parameter=="marah"){
      return marah;
    }else{
      return tidak_marah;
    }
    /* console.log(marah);
    console.log(tidak_marah); */
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  promiseOutput,
};
