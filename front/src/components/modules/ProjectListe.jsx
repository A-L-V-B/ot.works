import React, { useState } from "react";
import SanityImage from "../SanityImage";
import { _localizeField, _localizeText } from "../../core/utils";
import clsx from "clsx";

const ProjectListe = ({ input }) => {
  const [image, setImage] = useState();

  const { listTitle, listedProjects } = input;
  // console.log(listedProjects)
  const listedProjectsSorted = listedProjects.sort((a, b) => {
    return new Date(b.dateDelivered) - new Date(a.dateDelivered);
  });

  const _getYear = d => {
    // console.log(d)
    const year = new Date(d).getFullYear();
    return !isNaN(year) ? `, ${year}` : "";
  };

  const _preloadImage = asset => {
    if (asset) {
      const _image = new Image();
      _image.src = asset.src;
    }
  };
  // return null
  return (
    <section className='project-liste'>
      <div className='row '>
        <div className='col-md-4 '>
          <h2>{_localizeField(listTitle)}</h2>
        </div>
      </div>

      <ul>
        {listedProjectsSorted.map((li, i) => (
          <li
            key={i}
            onMouseEnter={() => _preloadImage(li.imageFeatured)}
            // onMouseLeave={() => setPreloadImage(false)}
          >
            <div className='client'>{li.client}</div>
            <div className='row'>
              <div className='col-md-10 col-xs-12'>
                <div className='title fw500'>
                  {`${_localizeField(li.title)}${_getYear(li.dateDelivered)}`}
                </div>
              </div>
              <div className='col-md-1 col-xs-9 tar'>
                {li.projectUrl && (
                  <a href={li.projectUrl} target='_blank' rel='noreferrer'>
                    {_localizeText("link")}
                  </a>
                )}
              </div>
              {li.imageFeatured && li.imageFeatured.asset && (
                <div className='col-md-1 col-xs-3 tar'>
                  <button
                    onMouseEnter={() => setImage(li.imageFeatured)}
                    // onMouseLeave={() => setImage(null)}
                    onClick={() => {
                      // !image ? setImage(li.imageFeatured) : setImage(null);
                    }}>
                    {_localizeText("image")}
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div
        className={clsx("image-overlay", image ? "show" : "hide")}
        role='button'
        tabIndex={0}
        onClick={() => setImage(null)}>
        <div className='row center-xs h100'>
          <div className='col-md-10 col-xs-12 h100 '>
            <div className='inner h100'>
              {image && <SanityImage input={image} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectListe;
