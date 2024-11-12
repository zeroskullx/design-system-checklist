// export const copyToClipboard = (str: string) => {
//   if (!document.queryCommandSupported('copy')) return;

//   const el = document.createElement('textarea');

//   el.value = str;
//   el.setAttribute('readonly', '');
//   el.style.position = 'absolute';
//   el.style.left = '-9999px';
//   document.body.appendChild(el);

//   const selection = document.getSelection();
//   const selected = selection && selection.rangeCount > 0 ? selection.getRangeAt(0) : false;

//   el.select();
//   document.execCommand('copy');
//   document.body.removeChild(el);

//   if (selection && selected) {
//     selection.removeAllRanges();
//     selection.addRange(selected);
//   }
// };

export const copyToClipboard = async (str: string) => {
  if (!navigator.clipboard) {
    console.warn("Clipboard API não é suportada");
    return;
  }

  try {
    await navigator.clipboard.writeText(str);
    //console.log("Texto copiado para a área de transferência!");
  } catch (error) {
    console.error("Falha ao copiar texto: ", error);
  }
};
