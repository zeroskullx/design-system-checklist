'use client'

import React from "react";

import { copyToClipboard } from "../../utilities/clipboard";
import { encode } from "../../utilities/export";
import { useCheckedIds } from "../../utilities/checklistsContext";
import { Button } from "../Button";

const ExportButton = ({ text, feedbackText }: { text: string, feedbackText: string }) => {
  const [exported, setExported] = React.useState(false);
  const { checkedIds } = useCheckedIds();

  const handleExport = () => {
    const exportId = encode(checkedIds.join(","));
    const baseUrl = `${window.location.origin}/export`;
    const exportUrl = exportId ? `${baseUrl}/${exportId}` : baseUrl;

    copyToClipboard(exportUrl);
    setExported(true);

    setTimeout(() => {
      setExported(false);
    }, 5000);
  };

  return (
    <Button
      text={text}
      feedbackText={feedbackText}
      onClick={handleExport}
      toggled={exported}
    />
  );
};

export { ExportButton };
