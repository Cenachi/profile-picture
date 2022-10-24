import React, { useState } from "react";
import { BiUpload } from "react-icons/bi";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const Picture = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [picUrl, setPicUrl] = useState<string>(
    "data:image/jpeg;base64,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"
  );

  const [previewUrl, setPreviewUrl] = useState<string>(
    "data:image/jpeg;base64,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"
  );

  const handleFileUpload = (input: HTMLInputElement) => {
    const file = input.files![0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreviewUrl(imageUrl);
  };

  return (
    <div>
      {isOpen && (
        <div>
          <div
            className="background"
            onClick={() => {
              setIsOpen(false);
            }}
          />

          <div className="modal">
            <div className="header flex items-center justify-between px-1">
              <p>New Picture</p>
              <IoIosCloseCircleOutline
                onClick={() => {
                  setIsOpen(false);
                  setPreviewUrl(picUrl);
                }}
                className="close-icon"
                size={20}
              />
            </div>
            <div className="body">
              <div
                style={{
                  backgroundImage: `url(${previewUrl})`,
                  height: "200px",
                  width: "200px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div className="footer">
              <button className="flex items-center gap-3">
                <input
                  type="file"
                  accept=".jpeg, .jpg, .png, .tiff, .gif"
                  onChange={(e) => {
                    handleFileUpload(e.currentTarget);
                  }}
                />
                <BiUpload className="icon" />
                UPLOAD
              </button>

              <button
                onClick={() => {
                  setPicUrl(previewUrl);
                  setIsOpen(false);
                }}
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        onClick={() => setIsOpen(true)}
        style={{
          backgroundImage: `url(${picUrl})`,
          height: "200px",
          width: "200px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      />
    </div>
  );
};
