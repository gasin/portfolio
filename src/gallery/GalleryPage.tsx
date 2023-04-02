import { Fragment } from "react";

function GalleryPage() {
  const imgFiles = [
    {"id": 0, "name": "kubosan", "path": require("../assets/gallery/kubosan.png"), "description": "久保さんのFA"},
    {"id": 1, "name": "koshimizusan", "path": require("../assets/gallery/koshimizu.png"), "description": "小清水透さんのFA"},
    {"id": 2, "name": "orange_nature", "path": require("../assets/gallery/orange_nature.png"), "description": "風景画像模写"},
    {"id": 3, "name": "chenso", "path": require("../assets/gallery/chenso.png"), "description": "チェンソーマン模写"},
  ];

  const imgPath = (fileName: string) => (
    "../assets/gallery/" + fileName
  );

  return (
    <Fragment>
      <h2>Gallery</h2>
      過去に書いた絵。
      <div className="row">
        {imgFiles.map((imgFile) => (
          <div key={imgFile.id} className="cols-sm">
            <div className="card">
              <img src={imgFile.path} alt={imgFile.name} />
              <section className="section dark">
                {imgFile.description}
              </section>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  )
}

export default GalleryPage;
