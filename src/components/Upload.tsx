import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import {
  Button,
  Window,
  WindowHeader,
  Table,
  TableBody,
  TableDataCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Hourglass,
} from "react95";
import { post, get } from "../util/fetch";

const Wrapper = styled.div`
  width: 90%;
  max-width: 800px;
  height: 200px;
  padding-top: 2.5%;
`;

const Upload = () => {
  const [uploadDisabled, setUploadDisabled] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>();
  const [files, setFiles] = useState<{ key: string; size: number }[]>([]);
  const uploadRef: React.RefObject<HTMLInputElement> = useRef(null);

  useEffect(() => {
    getFiles();
  }, []);

  async function getFiles() {
    try {
      const files = await get("file/list");
      setFiles(files);
    } catch (e) {
      console.error(e);
    }
  }

  async function submit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    if (file) {
      const data = new FormData();
      data.append(file.name, file);
      setSubmitting(true);
      try {
        await post("file", {
          body: data,
        });
        await getFiles();
      } catch (e) {
        console.error(e);
      }
      setSubmitting(false);
      setFile(null);
    }
  }

  function onFile(_: React.BaseSyntheticEvent) {
    if (uploadRef?.current?.files?.[0]) {
      setUploadDisabled(false);
      setFile(uploadRef?.current?.files?.[0]);
    }
  }

  async function onRowAction(key: string) {
    try {
      const { url } = await get(`file/url?key=${key}`);
      window.open(url);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Wrapper>
      <Window style={{ width: "100%" }}>
        <WindowHeader>Upload a file</WindowHeader>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeadCell>Name</TableHeadCell>
              <TableHeadCell>Size</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {files.map((f) => {
              return (
                <TableRow
                  key={f.key}
                  onClick={() => onRowAction(f.key)}
                  onTouchEnd={() => onRowAction(f.key)}
                >
                  <TableDataCell style={{ textAlign: "center" }}>
                    {f.key}
                  </TableDataCell>
                  <TableDataCell style={{ textAlign: "center" }}>
                    {(f.size / 1000 / 1000).toFixed(2)} mb
                  </TableDataCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <form
          style={{
            width: "100%",
            padding: "1% 0",
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
          }}
          onSubmit={submit}
        >
          <input
            id="upload"
            type="file"
            style={{ display: "none" }}
            onChange={onFile}
            ref={uploadRef}
          />
          <Button
            style={{ marginRight: "1%" }}
            disabled={submitting}
            onClick={() => {
              if (uploadRef?.current) {
                uploadRef.current.click();
              }
            }}
          >
            Select file
          </Button>
          <Button
            disabled={submitting || uploadDisabled}
            style={{ marginRight: "0.5%" }}
            primary
            type="submit"
          >
            Upload
          </Button>
        </form>
        <div style={{ display: "flex", justifyContent: "right" }}>
          {!!file?.name && <p>{file.name}</p>}
        </div>
      </Window>
      {submitting && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        >
          <Hourglass />
        </div>
      )}
    </Wrapper>
  );
};

export default Upload;
