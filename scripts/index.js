let array=JSON.parse(localStorage.getItem("userdata"));
   let takeid=document.querySelector("#room");
   takeid.innerHTML=array.name;

  let arr = [
    "https://images.pexels.com/photos/3865912/pexels-photo-3865912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://media.istockphoto.com/photos/female-friends-shopping-picture-id932956088?k=20&m=932956088&s=612x612&w=0&h=RSOaYN2fJs9aW-MttpgwcaFoA-E6-k5q4eA817rYYgI=",
    "https://images.pexels.com/photos/6567728/pexels-photo-6567728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    "https://media.istockphoto.com/photos/smiling-african-american-male-shopper-checking-purchases-in-paper-picture-id1157541149?k=20&m=1157541149&s=612x612&w=0&h=HlQmX471tlK_F7aT3_khYIcS6uAKXwjllBKEbx0nv3I=",
    "https://images.pexels.com/photos/5650045/pexels-photo-5650045.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  ];
  let i = 0;
  let id;
  let tom = document.querySelector("#praveen");
  id = setInterval(() => {
    if (i == arr.length) {
      i = 0;
    } else {
      tom.innerHTML = null;
      let dog = arr[i];
      let make = document.createElement("img");
      make.setAttribute("src", dog);
      tom.append(make);
      i++;
    }
  }, 3000);

  let one = [
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/48f59438-2806-47c5-bc44-e6b6882865c71653643704628-QL_Watches.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/fcb5c92a-f48b-4959-af1d-a18e05cf4f4e1653643704557-QL_TrackPants.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/26176aa9-ebc4-42f6-8977-a468286082521653643704138-QL_-Skincare.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/2d883965-5d34-4bf8-99e2-b263c8920d651653643704260-QL_GroomingEssentials.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/306481ec-1b07-46a5-81f9-210fa4ee21481653643704251-QL_Fragrances.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/a1adaa79-f742-45a1-9ad6-59fedd33aa421653643704538-QL_Tops_Tees.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/77eee7e0-9638-4ddc-8726-b0ea0f9d9d591653643704145-QL_ActivewearW.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/9c3501e3-22b0-47b0-b60a-2de70f3c8f951653643704178-QL_Bras_Briefs.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/8507ccd1-92ee-4e1b-a8e1-b9468a246b401653643704242-QL_FormalShoes.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/d3d0683b-3616-40c4-89d8-5fd3273ac80d1653643704226-QL_Flip-Flops.jpg",
    },
  ];
  let shotone = document.querySelector("#hell");
  let praveenone = (one) => {
    one.forEach((ele) => {
      let creone = document.createElement("div");
      creone.addEventListener("click",function(){
        window.location.href="boysdata.html"
      })

      let moon = document.createElement("img");
      moon.setAttribute("src", ele.img);

      creone.append(moon), shotone.append(creone);
    });
  };
  praveenone(one);

  let shottwo = document.querySelector("#rool");
  let creobj = [
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/8972e6d6-fa51-477c-9191-80bcb98abc571653371609423-BudgetBuys_Innerwear.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/f54d3d79-4d55-4353-8dda-61be55def9371653371609475-BudgetBuys_Kurtas_Sets.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/d1b24c63-35f0-4800-8673-e404eff3678c1653371609502-BudgetBuys_Loungewear.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/80fc29d1-16f6-4043-82ce-35e4db4ebbf31653371609520-BudgetBuys_Makeup.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/3b16a87f-4bdb-4349-bfd2-25cb3114d8741653371609559-BudgetBuys_Shampoos_Conditioners.jpg",
    },
  ];
  let bommaone = (creobj) => {
    creobj.forEach((ele) => {
      let cretwo = document.createElement("div");
      cretwo.addEventListener("click",function(){
        window.location.href="boysdata.html"
      })

      let four = document.createElement("img");
      four.setAttribute("src", ele.img);

      cretwo.append(four);
      shottwo.append(cretwo);
    });
  };
  bommaone(creobj);

  let thirdone = document.querySelector("#again");
  let domone = [
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/5ed1bde8-f82a-427b-a71b-a38ec997c9031653557668365-Forever_21.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/d21dcf05-a081-4f98-be1a-ab1d7f6bac261653557668623-Sassafras.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/d45fc4ac-1bbd-4cf2-8126-9a3791f64f731653557668275-Berrylush.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/336fb662-c6c6-46ef-9738-7beaf8eec6b61653557668660-Street_9.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/75a972cb-d3c3-42a8-909f-6ff87aa2d4781653557668722-Vero_Moda.jpg",
    },
  ];
  let againone = (domone) => {
    domone.forEach((ele) => {
      let pore = document.createElement("div");
      pore.addEventListener("click",function(){
        window.location.href="womendata.html"
      })

      let mori = document.createElement("img");
      mori.setAttribute("src", ele.img);

      pore.append(mori);
      thirdone.append(pore);
    });
  };
  againone(domone);

  let takebro = document.querySelector("#mouse");
  let makenew = [
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/c901f5f6-1a2f-458d-a515-a8e31be07d571653557793075-M-S_and_Triumph.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/7e2470d0-bc26-41ac-b740-b03e9ca885691653557793047-Jockey_-_Van_Heusen.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/ad9a4d2a-2e0e-419b-87c4-7fb9f6fe903b1653557793053-Kanvin_-_Sweet_Dreams.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/a17782c9-3d37-47e1-b4bf-44aa6252f4611654590216311-image_jpeg_1438665013.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/fd445a32-1832-4299-96f1-6dea1cb7d9e51654590216319-image_jpeg_487874744.jpg",
    },
  ];

  let whatbro = (makenew) => {
    makenew.forEach((ele) => {
      let mak = document.createElement("div");
      mak.addEventListener("click",function(){
        window.location.href="womendata.html"
      })

      let six = document.createElement("img");
      six.setAttribute("src", ele.img);

      mak.append(six);
      takebro.append(mak);
    });
  };
  whatbro(makenew);

  let makebro = document.querySelector("#here");
  let creboom = [
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/e4d18e71-7924-4587-b006-f2b93b8a97631653557737911-Nike.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/75fd7d92-7a07-42f9-96dc-b281a08c80e01653557737827-Adidas_and_Reebok_.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/5b6d9644-5d68-4bbe-a413-fb375aa526f11653557737917-Puma.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/2fab2729-9f60-4336-8406-0e5e9abd4f981653557737944-Skechers__.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/f1f56c46-6eb5-40aa-84d8-01595229f5311653557737848-Crocs.jpg",
    },
  ];
  let takshot = (creboom) => {
    creboom.forEach((ele) => {
      let creprav = document.createElement("div");
      creprav.addEventListener("click",function(){
        window.location.href="boysdata.html"
      })

      let onn = document.createElement("img");
      onn.setAttribute("src", ele.img);

      creprav.append(onn);
      makebro.append(creprav);
    });
  };
  takshot(creboom);

  let po = document.querySelector("#col");
  let barke = [
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/3da64915-df48-44cb-88f4-86343237e12c1653557830698-USPA_-_UCB.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/9f77891a-ee01-43c1-a429-0725fdbba4191653557830704-UTH_-_Roadster.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/ffd00197-07fa-4554-be04-24ae327752a21653557830621-Allen_solly_-_USPA.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/ffd00197-07fa-4554-be04-24ae327752a21653557830621-Allen_solly_-_USPA.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/94f21508-0488-4c64-bf3f-2d95a5467ac31653557830671-Mothercare_-_Mini_Klub_1.jpg",
    },
  ];

  let balaya = (barke) => {
    barke.forEach((ele) => {
      let chair = document.createElement("div");
      chair.addEventListener("click",function(){
        window.location.href="boysdata.html"
      })

      let mainoen = document.createElement("img");
      mainoen.setAttribute("src", ele.img);

      chair.append(mainoen);
      po.append(chair);
    });
  };
  balaya(barke);

  let takeaka = document.querySelector("#malakka");
  let pitch = [
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/e6d88126-c27d-4337-980b-a35b1e0872501653558945963-Maybelline.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/7747b639-fccd-4ccf-b54a-562b2861d4681653558945909-L-Oreal_Professionnel.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/5bffea6c-4afb-422d-a2c9-d2e876328f691653558946077-Sugar.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/28/dfc3e6b0-84f1-44c9-9c6d-05d323ba23ca1653760633284-image_jpeg327693797.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/1c8392af-9b25-4a1d-84f3-ff3e2026cf261653558945946-Mamaearth.jpg",
    },
  ];

  let boombadal = (pitch) => {
    pitch.forEach((ele) => {
      let you = document.createElement("div");

      let lap = document.createElement("img");
      lap.setAttribute("src", ele.img);

      you.append(lap);
      takeaka.append(you);
    });
  };
  boombadal(pitch);

  let mo = document.querySelector("#malli");
  let proone = [
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/3c82c871-9e5c-4e9d-8654-90f1165c9e3e1653558546266-Dressberry-_Mast_-_Harbour.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/0527ae7a-32c8-4bc1-8428-831299fd5a341653558546364-Zaveri_Pearls_-_Ami.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/ccb9e9ec-9e47-452f-8a2e-4714312c5af41653558546297-Giva.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/1727b0a7-fae6-40ac-b585-37b7877bc3c51653558546247-All_1.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/23be2eb3-6ae1-43b3-8384-0141b4d852391653558546253-All_2.jpg",
    },
  ];

  let madboy = (proone) => {
    proone.forEach((ele) => {
      let mad = document.createElement("div");
      mad.addEventListener("click",function(){
        window.location.href="womendata.html"
      })
      let barv = document.createElement("img");
      barv.setAttribute("src", ele.img);

      mad.append(barv);

      mo.append(mad);
    });
  };
  madboy(proone);

  let goone = document.querySelector("#good");
  let matchone = [
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/162c4323-a171-41df-9450-1f91ca74a7f91654595797011-image_jpeg_1989309683.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/bb2cc6d5-2f7b-416e-bcfc-35e10ca4addc1653557869692-.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/f47c3381-c46c-44db-a5f1-551e6598b5921653557869699-_1.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/464a682a-4896-4975-8e20-2dcc8a76dbd21653557869732-Swiss_Republic_II_Trident.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/d41f7d0d-11fa-433a-8301-8cf17cf134951653557869706-Cortina.jpg",
    },
  ];

  let goodbro = (matchone) => {
    matchone.forEach((ele) => {
      let pre = document.createElement("div");

      let presen = document.createElement("img");
      presen.setAttribute("src", ele.img);

      pre.append(presen);
      goone.append(pre);
    });
  };
  goodbro(matchone);

  let realone = document.querySelector("#shop");
  let real = [
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/06d44453-7735-4ea2-a146-1fbd8a5bc48e1654766637157-Shop-By-Category_HP_02.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/1de91390-00d9-4de3-8640-a47686a60d9c1654766637166-Shop-By-Category_HP_03.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/8f307ca0-ae6b-4bc9-944e-c8447ab871f81654766637174-Shop-By-Category_HP_04.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/cbca4163-4855-485a-93be-3cbb8d62f5821654766637181-Shop-By-Category_HP_05.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/cbca4163-4855-485a-93be-3cbb8d62f5821654766637181-Shop-By-Category_HP_05.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/6b5c6054-aadb-4ac8-8bb5-5f7e54bc6ca51654766637195-Shop-By-Category_HP_07.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/64bd7936-8f81-416f-9f60-5ba6a749671f1654766637202-Shop-By-Category_HP_08.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/2a5ae5ad-12bb-4c79-823f-0ce08fffb14d1654766637209-Shop-By-Category_HP_09.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/f2af2965-6263-4c30-a5db-ec743fc82edd1654766637216-Shop-By-Category_HP_10.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/b279d44f-46d5-486f-9d22-c4f8d1122da61654766637223-Shop-By-Category_HP_11.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/f70c9363-588f-4682-b5e9-3676e433ce391654766637232-Shop-By-Category_HP_12.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/233ad199-63f5-4862-8c1a-8b203b4c8ebb1654766637239-Shop-By-Category_HP_13.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/6da88c6c-a7ce-4143-9304-a9ee122fafcb1654766637290-Shop-By-Category_HP_20.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/d59e40c7-a8a4-4746-90c1-35545b37433e1654766637253-Shop-By-Category_HP_15.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/1e94196a-3a49-404f-9dbe-0f7b1d5566a21654766637259-Shop-By-Category_HP_16.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/57b3a627-7fa8-4093-91dd-7ed0e45256401654766637267-Shop-By-Category_HP_17.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/fdcc31ee-4b24-411a-84b5-d4f0c4a5c0e51654766637274-Shop-By-Category_HP_18.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/0e54ce81-5cfd-4ba0-a0ac-a230effd47211654766637282-Shop-By-Category_HP_19.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/6da88c6c-a7ce-4143-9304-a9ee122fafcb1654766637290-Shop-By-Category_HP_20.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/0630521f-d004-4e7b-97ee-d0f11f48c1451654766637301-Shop-By-Category_HP_21.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/6dfd6306-9021-4932-ba20-6a6380014c631654766637311-Shop-By-Category_HP_22.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/e0821297-389f-4bdc-a63a-cfaca163c0841654766637319-Shop-By-Category_HP_23.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/5c13a7f7-a78c-4edd-be35-6bd8265857901654766637330-Shop-By-Category_HP_24.jpg",
    },
    {
      img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/ea30b785-5f7e-4f39-9f7d-62377e6736e71654766637339-Shop-By-Category_HP_25.jpg",
    },
  ];
  let prepare = (real) => {
    real.forEach((ele) => {
      let boomream = document.createElement("div");
      creprav.addEventListener("click",function(){
        window.location.href="boysdata.html"
      })
      let bread = document.createElement("img");
      bread.setAttribute("src", ele.img);

      boomream.append(bread);

      realone.append(boomream);
    });
  };
  prepare(real);