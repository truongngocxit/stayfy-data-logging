import InputGroup from "./InputGroup";
import Input from "./Input";
import useInput from "../custom-hooks/useInput";
import { useContext } from "react";
import hostInfoContext from "../contexts/HostInfoContext";

export default function HostInfo() {
  const {
    hostName: [hostName, onChangeHostName, onResetHostName],
    hostEmail,
    hostPhone: [hostPhone, onChangeHostPhone, onResetHostPhone],
    hostDate: [hostDate, onChangeHostDate, onResetHostDate],
  } = useContext(hostInfoContext);
  return (
    <InputGroup heading="Host information">
      <Input label="Host name" value={hostName} onChange={onChangeHostName} />
      <Input label="Email" value={hostEmail} />
      <Input label="Phone" value={hostPhone} onChange={onChangeHostPhone} />
      <Input label="Joined Date" value={hostDate} onChange={onChangeHostDate} />
    </InputGroup>
  );
}
