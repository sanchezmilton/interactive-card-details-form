import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [nroTarjeta, setNroTarjeta] = useState("0000000000000000");
  const [nombre, setNombre] = useState("JANE APPLESEED");
  const [cvc, setCvc] = useState("000");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");

  const aux =
    "mt-2 border rounded-md px-3 py-2 text-base font-normal text-dark-grayish-violet";

  const divTitle = (text: string) => {
    return <div className="text-very-dark-violet">{text}</div>;
  };

  const handleTarjeta = (tarjeta: string) => {
    return tarjeta.match(/.{1,4}/g)!.join(" ");
  };

  const handleExpDate = (mm: string, yy: string) => {
    return mm + "/" + yy;
  };

  return (
    <>
      <Head>
        <title>Frontend Mentor | Interactive card details form</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-full flex-col justify-between bg-white xl:flex-row xl:justify-start">
        <div className="h-1/3 w-full bg-main-mobile bg-cover xl:h-full xl:w-1/3 xl:bg-main-desktop"></div>
        <form
          className="mx-7 mb-10 flex flex-col gap-14 font-space-grotesk text-sm font-semibold lg:mx-auto lg:w-1/2 xl:mb-0 xl:w-auto xl:justify-center xl:pl-24"
          action=""
        >
          <label htmlFor="" className="">
            {divTitle("CARDHOLDER NAME")}
            <input
              className={`w-full ${aux}`}
              onChange={(e) =>
                e.target.value === ""
                  ? setNombre("JANE APPLESEED")
                  : setNombre(e.target.value)
              }
              maxLength={30}
              type="text"
              placeholder="e.g. Jane Appleseed"
            />
          </label>
          <label htmlFor="">
            {divTitle("CARD NUMBER")}
            <input
              className={`w-full ${aux}`}
              onChange={(e) =>
                e.target.value === ""
                  ? setNroTarjeta("1234 5678 9123 0000")
                  : setNroTarjeta(e.target.value)
              }
              maxLength={16}
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
            />
          </label>
          <div className="flex gap-4">
            <label htmlFor="">
              {divTitle("EXP. DATE (MM/YY)")}
              <div className="flex gap-4">
                <input
                  className={`w-16 ${aux}`}
                  onChange={(e) =>
                    e.target.value === ""
                      ? setMonth("00")
                      : setMonth(e.target.value)
                  }
                  maxLength={2}
                  type="text"
                  placeholder="MM"
                />
                <input
                  className={`w-16 ${aux}`}
                  onChange={(e) =>
                    e.target.value === ""
                      ? setYear("00")
                      : setYear(e.target.value)
                  }
                  maxLength={2}
                  type="text"
                  placeholder="YY"
                />
              </div>
            </label>
            <label className="flex grow flex-col" htmlFor="">
              {divTitle("CVC")}
              <input
                className={`w-full ${aux}`}
                onChange={(e) =>
                  e.target.value === "" ? setCvc("123") : setCvc(e.target.value)
                }
                maxLength={3}
                type="text"
                placeholder="e.g. 123"
              />
            </label>
          </div>
          <button
            className="w-full rounded-lg bg-very-dark-violet py-3 text-lg text-white"
            type="submit"
          >
            Confirm
          </button>
        </form>
        {/* TARJETA DORSO */}
        <div className="absolute right-5 bottom-3/4 h-1/5 w-96 rounded-lg bg-card-back bg-cover lg:right-64 xl:fixed xl:bottom-1/3 xl:left-96">
          <span className="absolute top-[5.75rem] left-[19.5rem] text-left text-sm text-white">
            {cvc}
          </span>
        </div>
        {/* TARJETA FRENTE */}
        <div className="absolute left-5 top-40 h-1/5 w-96 rounded-lg bg-card-front bg-cover font-space-grotesk shadow-2xl lg:left-64 xl:top-1/4 xl:left-80">
          <Image
            className="relative top-5 left-5 h-9 w-16"
            width={0}
            height={0}
            src="/card-logo.svg"
            alt=""
          />
          <span className="absolute bottom-12 left-5 text-2xl tracking-widest text-white">
            {handleTarjeta(nroTarjeta)}
          </span>
          <span className="absolute bottom-5 left-5 text-xs tracking-widest text-white">
            {nombre}
          </span>
          <span className="absolute bottom-5 right-5 text-xs tracking-widest text-white">
            {handleExpDate(month, year)}
          </span>
        </div>
      </main>
    </>
  );
}
