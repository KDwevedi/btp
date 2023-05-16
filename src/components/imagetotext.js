import { useEffect, useState } from "react";

export default function Converter() {
    const [ocr, setOcr] = useState("");
    const [imageData, setImageData] = useState(null);
    // const worker = createWorker({
    //   logger: (m) => {
    //     console.log(m);
    //   },
    // });
    // console.log(worker)
    const convertImageToText = async () => {
        if (!imageData) return;

      var myHeaders = new Headers();
      myHeaders.append("apikey", "K89129283688957");
      var formdata = new FormData();
      formdata.append("language", "eng");
      formdata.append("isOverlayRequired", "false");
      formdata.append("base64Image", imageData);
      formdata.append("iscreatesearchablepdf", "false");
      formdata.append("issearchablepdfhidetextlayer", "false");
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

        fetch("https://api.ocr.space/parse/image", requestOptions)
        .then(response => response.text())
        .then(result => setOcr(result))
        .catch(error => console.log('error', error));

            //   await worker.load();
            //   await worker.loadLanguage("eng");
            //   await worker.initialize("eng");
            //   const {
            //     data: { text },
            //   } = await worker.recognize(imageData);
            
            };
  
    useEffect(() => {
      convertImageToText();
    }, [imageData]);
  
    function handleImageChange(e) {
      const file = e.target.files[0];
      if(!file)return;
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUri = reader.result;
        console.log({ imageDataUri });
        setImageData(imageDataUri);
      };
      reader.readAsDataURL(file);
    }

    return (
        <div className="Converter">
          <div>
            <p>Choose an Image</p>
            <input
              type="file"
              name=""
              id=""
              onChange={handleImageChange}
              accept="image/*"
            />
          </div>
          {/* {progress < 100 && progress > 0 && <div>
            <div className="progress-label">Progress ({progress}%)</div>
            <div className="progress-bar">
              <div className="progress" style={{width: `${progress}%`}} ></div>
            </div>
          </div>} */}
          <div className="display-flex">
            <img src={imageData} alt="" srcset="" />
            <p>{ocr}</p>
          </div>
        </div>
      );

}