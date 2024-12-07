import { buffer, text } from "stream/consumers";

export enum KeyBoardKeys {
  enterKey = "Enter",
  tabKey = "Tab",
  backspaceKey = "Backspace",
  deleteKey = "Delete",
  arrowUpKey = "ArrowUp",
  arrowDownKey = "ArrowDown",
  arrowLeftKey = "ArrowLeft",
  arrowRightKey = "ArrowRight",
  escapeKey = "Escape",
  homeKey = "Home",
  endKey = "End",
  pageUpKey = "PageUp",
  pageDownKey = "PageDown",
  shiftKey = "Shift",
  ctrlKey = "Control", // or 'Ctrl'
  altKey = "Alt",
  metaKey = "Meta",
}

export function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}


export const enum FileSizeInBytes{
    OneKiloByte = 1024,
    OneMegaByte= 1024 *1024,
}

export const enum FileMimeType {
    Exe = "exe",
      // Documents
      Pdf = "pdf", // .pdf
      Doc = "doc", // .doc
      Docx = "docx", // .docx
      Xls = "xls", // .xls
      Xlsx = "xlsx", // .xlsx
      Ppt = "ppt", // .ppt
      Pptx = "pptx", // .pptx
      Txt = "txt", // .txt
      Csv = "csv", // .csv
      Json = "json", // .json
      Xml = "xml", // .xml
      Html = "html", // .html
      Odt = "odt", // .odt
      
      // Images
      Jpg = "jpg", // .jpg, .jpeg
      Jpeg = "jpeg", // .jpeg
      Png = "png", // .png
      Gif = "gif", // .gif
      Bmp = "bmp", // .bmp
      Svg = "svg", // .svg
      Tiff = "tiff", // .tiff
      Webp = "webp", // .webp
  
      // Audio
      Mp3 = "mp3", // .mp3
      Wav = "wav", // .wav
      Ogg = "ogg", // .ogg
      M4a = "m4a", // .m4a
      Flac = "flac", // .flac
      
      // Video
      Mp4 = "mp4", // .mp4
      Avi = "avi", // .avi
      Mkv = "mkv", // .mkv
      Webm = "webm", // .webm
      Mov = "mov", // .mov
      
      // Archives/Compressed
      Zip = "zip", // .zip
      Rar = "rar", // .rar
      Tar = "tar", // .tar
      Gz = "gz", // .gz
      Bz2 = "bz2", // .bz2
      SevenZip = "7z", // .7z
  
      // Application and Package Files
      Apk = "apk", // .apk
      Ipa = "ipa", // .ipa
      Deb = "deb", // .deb
      Rpm = "rpm", // .rpm
  
      // Others
      Iso = "iso", // .iso
      Dmg = "dmg", // .dmg
      Css = "css", // .css
      Js = "js", // .js
      Rtf = "rtf"  // .rtf
}
/**
 *
 * @param fileSize
 * @param text
 * @param filename
 * @param fileMimeType
 * @returns
 */

export function createFiles(
  fileSize: number,
    filename: string,
  fileMimeType: string,
  text = "",
) {
  const buff = Buffer.alloc(fileSize);
  buff.write(text);
  const notesAttachment = {
    name: filename,
    mimeType: fileMimeType,
    buffer: buff,
  };
  return notesAttachment;
}
