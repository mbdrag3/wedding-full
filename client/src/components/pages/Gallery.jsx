import { useState } from 'react';
import Masonry from 'react-masonry-css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import '../../styles/Gallery.css';

import engagement1 from '../../assets/optimized-gallery/engagement-1.jpg';
import engagement2 from '../../assets/optimized-gallery/engagement-2.jpg';
import engagement3 from '../../assets/optimized-gallery/engagement-3.jpg';
import engagement4 from '../../assets/optimized-gallery/engagement-4.jpg';

import IMG1  from '../../assets/optimized-gallery/DSC_123.jpg';
import IMG2  from '../../assets/optimized-gallery/DSC_1234.jpg';
import IMG3  from '../../assets/optimized-gallery/DSC_12345.jpg';
import IMG4  from '../../assets/optimized-gallery/DSC_123456.jpg';
import IMG5  from '../../assets/optimized-gallery/DSC_7541.JPG';
import IMG6  from '../../assets/optimized-gallery/IMG_0250.jpg';
import IMG7  from '../../assets/optimized-gallery/IMG_0384.jpg';
import IMG8  from '../../assets/optimized-gallery/IMG_0486.jpg';
import IMG9  from '../../assets/optimized-gallery/IMG_0488.jpg';
import IMG10 from '../../assets/optimized-gallery/IMG_0607.jpg';
import IMG11 from '../../assets/optimized-gallery/IMG_0637.jpg';
import IMG12 from '../../assets/optimized-gallery/IMG_0832.jpg';
import IMG13 from '../../assets/optimized-gallery/IMG_0970.jpg';
import IMG14 from '../../assets/optimized-gallery/IMG_1907.jpg';
import IMG15 from '../../assets/optimized-gallery/IMG_2231.jpg';
import IMG16 from '../../assets/optimized-gallery/IMG_2883.jpg';
import IMG17 from '../../assets/optimized-gallery/IMG_3391.jpg';
import IMG18 from '../../assets/optimized-gallery/IMG_3394.jpg';
import IMG19 from '../../assets/optimized-gallery/IMG_3444.jpg';
import IMG20 from '../../assets/optimized-gallery/IMG_3769.jpg';
import IMG21 from '../../assets/optimized-gallery/IMG_5394.jpg';
import IMG22 from '../../assets/optimized-gallery/IMG_5952.jpg';
import IMG23 from '../../assets/optimized-gallery/IMG_6045.jpg';
import IMG24 from '../../assets/optimized-gallery/IMG_6048.jpg';
import IMG25 from '../../assets/optimized-gallery/IMG_6466.jpg';
import IMG26 from '../../assets/optimized-gallery/IMG_6538.jpg';
import IMG27 from '../../assets/optimized-gallery/IMG_6817.jpg';
import IMG28 from '../../assets/optimized-gallery/IMG_7496.jpg';
import IMG29 from '../../assets/optimized-gallery/IMG_8607.jpg';
import IMG30 from '../../assets/optimized-gallery/IMG_8610.jpg';
import IMG31 from '../../assets/optimized-gallery/IMG_8745.jpg';
import IMG32 from '../../assets/optimized-gallery/IMG_9164.jpg';
import IMG33 from '../../assets/optimized-gallery/IMG_9450.jpg';
import IMG34 from '../../assets/optimized-gallery/IMG_9463.jpg';
import IMG35 from '../../assets/optimized-gallery/IMG_9741.jpg';
import IMG36 from '../../assets/optimized-gallery/IMG_9758.jpg';
import IMG37 from '../../assets/optimized-gallery/IMG_9759.jpg';
import IMG38 from '../../assets/optimized-michael-wedding/128.JPG';
import IMG39 from '../../assets/optimized-michael-wedding/42101C5D-.jpg';
import IMG40 from '../../assets/optimized-michael-wedding/20161120_085010.jpg';
import IMG41 from '../../assets/optimized-michael-wedding/20161120_134822.jpg';
import IMG42 from '../../assets/optimized-michael-wedding/20180531_211111.jpg';
import IMG43 from '../../assets/optimized-michael-wedding/20180531_215637.jpg';
import IMG44 from '../../assets/optimized-michael-wedding/20180628_191053.jpg';
import IMG45 from '../../assets/optimized-michael-wedding/20180709_203022.jpg';
import IMG46 from '../../assets/optimized-michael-wedding/20181015_220914.jpg';
import IMG47 from '../../assets/optimized-michael-wedding/20190709_193414_HDR.jpg';
import IMG48 from '../../assets/optimized-michael-wedding/20190928_211938.jpg';
import IMG49 from '../../assets/optimized-michael-wedding/20190928_212127.jpg';
import IMG50 from '../../assets/optimized-michael-wedding/20200521_154416.jpg';
import IMG51 from '../../assets/optimized-michael-wedding/IMG_4955.JPG';
import IMG52 from '../../assets/optimized-michael-wedding/IMG_5531.JPG';
import IMG53 from '../../assets/optimized-michael-wedding/IMG_5536.JPG';
import IMG54 from '../../assets/optimized-michael-wedding/IMG_5537.JPG';
import IMG55 from '../../assets/optimized-michael-wedding/IMG_5539.JPG';
import IMG56 from '../../assets/optimized-michael-wedding/IMG_5558.JPG';
import IMG57 from '../../assets/optimized-michael-wedding/IMG_6499.JPG';
import IMG58 from '../../assets/optimized-michael-wedding/IMG_7669.JPG';
import IMG59 from '../../assets/optimized-michael-wedding/IMG_7672.JPG';
import IMG60 from '../../assets/optimized-michael-wedding/IMG_8105.JPG';
import IMG61 from '../../assets/optimized-michael-wedding/IMG_8222.JPG';
import IMG62 from '../../assets/optimized-michael-wedding/IMG_8238.JPG';
import IMG63 from '../../assets/optimized-michael-wedding/IMG_8239.JPG';
import IMG64 from '../../assets/optimized-michael-wedding/IMG_8240.JPG';
import IMG65 from '../../assets/optimized-michael-wedding/IMG_8241.JPG';
import IMG66 from '../../assets/optimized-michael-wedding/IMG_8253.JPG';
import IMG67 from '../../assets/optimized-yai-wedding/21AEC504-14C1-4DC9-BA76-646AD1838E73.jpg';
import IMG68 from '../../assets/optimized-yai-wedding/292490D0-674C-431D-A505-DE8192A4E2FF.JPG';
import IMG70 from '../../assets/optimized-yai-wedding/66899792754__08FAFFC1-087F-4717-A2FF-8BBC2CBD6878.jpg';
import IMG71 from '../../assets/optimized-yai-wedding/66899850326__65A768A4-349D-4740-B2A6-FE92F6D370F7.jpg';
import IMG72 from '../../assets/optimized-yai-wedding/68238524489__53F18133-7EF0-4815-B2B9-2EF1AF527BB2.jpg';
import IMG73 from '../../assets/optimized-yai-wedding/8578148529264331253.JPG';
import IMG74 from '../../assets/optimized-yai-wedding/IMG_0576.JPG';
import IMG75 from '../../assets/optimized-yai-wedding/IMG_1140.JPG';
import IMG76 from '../../assets/optimized-yai-wedding/IMG_1141.JPG';
import IMG77 from '../../assets/optimized-yai-wedding/IMG_1142.JPG';
import IMG78 from '../../assets/optimized-yai-wedding/IMG_1355.jpg';
import IMG79 from '../../assets/optimized-yai-wedding/IMG_1364.JPG';
import IMG80 from '../../assets/optimized-yai-wedding/IMG_1398.JPG';
import IMG81 from '../../assets/optimized-yai-wedding/IMG_2713.JPG';
import IMG82 from '../../assets/optimized-yai-wedding/IMG_2877.jpg';
import IMG83 from '../../assets/optimized-yai-wedding/IMG_2878.jpg';
import IMG84 from '../../assets/optimized-yai-wedding/IMG_2879.jpg';
import IMG85 from '../../assets/optimized-yai-wedding/IMG_2880.jpg';
import IMG86 from '../../assets/optimized-yai-wedding/IMG_2881.jpg';
import IMG87 from '../../assets/optimized-yai-wedding/IMG_2882.jpg';
import IMG88 from '../../assets/optimized-yai-wedding/IMG_2884.jpg';
import IMG89 from '../../assets/optimized-yai-wedding/IMG_2885.jpg';
import IMG90 from '../../assets/optimized-yai-wedding/IMG_2888.jpg';
import IMG91 from '../../assets/optimized-yai-wedding/IMG_2889.jpg';
import IMG92 from '../../assets/optimized-yai-wedding/IMG_2890.jpg';
import IMG93 from '../../assets/optimized-yai-wedding/IMG_2891.jpg';
import IMG94 from '../../assets/optimized-yai-wedding/IMG_2892.jpg';
import IMG95 from '../../assets/optimized-yai-wedding/IMG_2894.jpg';
import IMG96 from '../../assets/optimized-yai-wedding/IMG_2895.jpg';
import IMG97 from '../../assets/optimized-yai-wedding/IMG_2896.jpg';
import IMG98 from '../../assets/optimized-yai-wedding/IMG_2897.jpg';
import IMG99 from '../../assets/optimized-yai-wedding/IMG_4356.jpg';
import IMG100 from '../../assets/optimized-yai-wedding/IMG_5278.jpg';
import IMG101 from '../../assets/optimized-yai-wedding/IMG_5434.JPG';


const images = [
  { src: IMG1 },
  { src: IMG2 },
  { src: IMG3 },
  { src: IMG4 },
  { src: IMG5 },
  { src: IMG6 },
  { src: IMG7 },
  { src: IMG8 },
  { src: IMG9 },
  { src: IMG10 },
  { src: IMG11 },
  { src: IMG12 },
  { src: IMG13 },
  { src: IMG14 },
  { src: IMG15 },
  { src: IMG16 },
  { src: IMG17 },
  { src: IMG18 },
  { src: IMG19 },
  { src: IMG20 },
  { src: IMG21 },
  { src: IMG22 },
  { src: IMG23 },
  { src: IMG24 },
  { src: IMG25 },
  { src: IMG26 },
  { src: IMG27 },
  { src: IMG28 },
  { src: IMG29 },
  { src: IMG30 },
  { src: IMG31 },
  { src: IMG32 },
  { src: IMG33 },
  { src: IMG34 },
  { src: IMG35 },
  { src: IMG36 },
  { src: IMG37 },
  { src: IMG38 },
  { src: IMG39 },
  { src: IMG40 },
  { src: IMG41 },
  { src: IMG42 },
  { src: IMG43 },
  { src: IMG44 },
  { src: IMG45 },
  { src: IMG46 },
  { src: IMG47 },
  { src: IMG48 },
  { src: IMG49 },
  { src: IMG50 },
  { src: IMG51 },
  { src: IMG52 },
  { src: IMG53 },
  { src: IMG54 },
  { src: IMG55 },
  { src: IMG56 },
  { src: IMG57 },
  { src: IMG58 },
  { src: IMG59 },
  { src: IMG60 },
  { src: IMG61 },
  { src: IMG62 },
  { src: IMG63 },
  { src: IMG64 },
  { src: IMG65 },
  { src: IMG66 },
  { src: IMG67 },
  { src: IMG68 },
  { src: IMG70 },
  { src: IMG71 },
  { src: IMG72 },
  { src: IMG73 },
  { src: IMG74 },
  { src: IMG75 },
  { src: IMG76 },
  { src: IMG77 },
  { src: IMG78 },
  { src: IMG79 },
  { src: IMG80 },
  { src: IMG81 },
  { src: IMG82 },
  { src: IMG83 },
  { src: IMG84 },
  { src: IMG85 },
  { src: IMG86 },
  { src: IMG87 },
  { src: IMG88 },
  { src: IMG89 },
  { src: IMG90 },
  { src: IMG91 },
  { src: IMG92 },
  { src: IMG93 },
  { src: IMG94 },
  { src: IMG95 },
  { src: IMG96 },
  { src: IMG97 },
  { src: IMG98 },
  { src: IMG99 },
  { src: IMG100 },
  { src: IMG101 }
];

// Shuffle the images array for randomization
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const randomizedImages = shuffleArray(images);


const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div className="gallery-container">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {images.map((img, idx) => (
          <img
            loading="lazy"
            key={idx}
            src={img.src}
            alt={`Gallery ${idx}`}
            className="masonry-img"
            onClick={() => setIndex(idx)}
          />
        ))}
      </Masonry>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={images}
        index={index}
      />
    </div>
  );
};

export default Gallery;
