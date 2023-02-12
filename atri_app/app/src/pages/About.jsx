import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex194Cb, useFlex192Cb, useFlex191Cb, useFlex193Cb, useFlex199Cb, useFlex200Cb, useFlex201Cb, useFlex202Cb, useFlex203Cb, useFlex205Cb, useFlex206Cb, useFlex207Cb, useFlex208Cb, useFlex210Cb, useFlex211Cb, useFlex214Cb, useFlex212Cb, useFlex213Cb, useFlex215Cb, useFlex216Cb, useFlex217Cb, useFlex219Cb, useFlex220Cb, useFlex222Cb, useFlex223Cb, useFlex224Cb, useFlex228Cb, useFlex229Cb, useFlex230Cb, useFlex234Cb, useFlex231Cb, useFlex232Cb, useFlex233Cb, useFlex240Cb, useFlex238Cb, useFlex237Cb, useFlex235Cb, useFlex236Cb, useFlex239Cb, useDiv132Cb, useFlex252Cb, useFlex249Cb, useFlex245Cb, useFlex241Cb, useFlex246Cb, useFlex250Cb, useFlex247Cb, useFlex242Cb, useFlex243Cb, useFlex251Cb, useFlex248Cb, useFlex244Cb, useDiv133Cb, useDiv134Cb, useDiv135Cb, useDiv136Cb, useDiv137Cb, useDiv138Cb, useImage68Cb, useTextBox133Cb, useTextBox134Cb, useTextBox135Cb, useTextBox136Cb, useTextBox137Cb, useButton31Cb, useButton32Cb, useTextBox143Cb, useTextBox144Cb, useImage70Cb, useFlex204Cb, useImage71Cb, useTextBox145Cb, useImage72Cb, useImage73Cb, useImage74Cb, useImage75Cb, useImage76Cb, useButton37Cb, useTextBox146Cb, useTextBox147Cb, useTextBox148Cb, useTextBox149Cb, useTextBox150Cb, useTextBox151Cb, useButton38Cb, useImage77Cb, useTextBox152Cb, useTextBox153Cb, useImage78Cb, useTextBox154Cb, useTextBox155Cb, useTextBox156Cb, useTextBox157Cb, useTextBox158Cb, useTextBox159Cb, useImage79Cb, useTextBox160Cb, useTextBox161Cb, useTextBox162Cb, useImage80Cb, useTextBox166Cb, useImage82Cb, useTextBox167Cb, useTextBox168Cb, useTextBox169Cb, useTextBox170Cb, useImage83Cb, useTextBox171Cb, useTextBox172Cb, useImage84Cb, useImage85Cb, useTextBox173Cb, useTextBox174Cb, useImage86Cb, useTextBox175Cb, useTextBox176Cb, useTextBox177Cb, useTextBox178Cb, useImage87Cb, useImage92Cb, useImage93Cb, useImage88Cb, useImage89Cb, useImage90Cb, useImage91Cb, useButton39Cb, useTextBox179Cb, useTextBox180Cb, useTextBox181Cb, useTextBox182Cb, useTextBox183Cb, useTextBox184Cb, useTextBox185Cb, useTextBox186Cb, useTextBox187Cb, useTextBox188Cb, useTextBox189Cb, useTextBox190Cb, useTextBox191Cb, useTextBox192Cb, useTextBox193Cb, useTextBox194Cb, useTextBox195Cb, useTextBox197Cb, useImage99Cb, useImage100Cb, useImage101Cb, useImage102Cb, useImage103Cb, useImage94Cb, useImage95Cb, useImage96Cb, useImage97Cb, useImage98Cb, useTextBox196Cb } from "../page-cbs/about";
import "../page-css/about.css";
import "../custom/about";

export default function About() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex194Props = useStore((state)=>state["about"]["Flex194"]);
const Flex194IoProps = useIoStore((state)=>state["about"]["Flex194"]);
const Flex194Cb = useFlex194Cb()
const Flex192Props = useStore((state)=>state["about"]["Flex192"]);
const Flex192IoProps = useIoStore((state)=>state["about"]["Flex192"]);
const Flex192Cb = useFlex192Cb()
const Flex191Props = useStore((state)=>state["about"]["Flex191"]);
const Flex191IoProps = useIoStore((state)=>state["about"]["Flex191"]);
const Flex191Cb = useFlex191Cb()
const Flex193Props = useStore((state)=>state["about"]["Flex193"]);
const Flex193IoProps = useIoStore((state)=>state["about"]["Flex193"]);
const Flex193Cb = useFlex193Cb()
const Flex199Props = useStore((state)=>state["about"]["Flex199"]);
const Flex199IoProps = useIoStore((state)=>state["about"]["Flex199"]);
const Flex199Cb = useFlex199Cb()
const Flex200Props = useStore((state)=>state["about"]["Flex200"]);
const Flex200IoProps = useIoStore((state)=>state["about"]["Flex200"]);
const Flex200Cb = useFlex200Cb()
const Flex201Props = useStore((state)=>state["about"]["Flex201"]);
const Flex201IoProps = useIoStore((state)=>state["about"]["Flex201"]);
const Flex201Cb = useFlex201Cb()
const Flex202Props = useStore((state)=>state["about"]["Flex202"]);
const Flex202IoProps = useIoStore((state)=>state["about"]["Flex202"]);
const Flex202Cb = useFlex202Cb()
const Flex203Props = useStore((state)=>state["about"]["Flex203"]);
const Flex203IoProps = useIoStore((state)=>state["about"]["Flex203"]);
const Flex203Cb = useFlex203Cb()
const Flex205Props = useStore((state)=>state["about"]["Flex205"]);
const Flex205IoProps = useIoStore((state)=>state["about"]["Flex205"]);
const Flex205Cb = useFlex205Cb()
const Flex206Props = useStore((state)=>state["about"]["Flex206"]);
const Flex206IoProps = useIoStore((state)=>state["about"]["Flex206"]);
const Flex206Cb = useFlex206Cb()
const Flex207Props = useStore((state)=>state["about"]["Flex207"]);
const Flex207IoProps = useIoStore((state)=>state["about"]["Flex207"]);
const Flex207Cb = useFlex207Cb()
const Flex208Props = useStore((state)=>state["about"]["Flex208"]);
const Flex208IoProps = useIoStore((state)=>state["about"]["Flex208"]);
const Flex208Cb = useFlex208Cb()
const Flex210Props = useStore((state)=>state["about"]["Flex210"]);
const Flex210IoProps = useIoStore((state)=>state["about"]["Flex210"]);
const Flex210Cb = useFlex210Cb()
const Flex211Props = useStore((state)=>state["about"]["Flex211"]);
const Flex211IoProps = useIoStore((state)=>state["about"]["Flex211"]);
const Flex211Cb = useFlex211Cb()
const Flex214Props = useStore((state)=>state["about"]["Flex214"]);
const Flex214IoProps = useIoStore((state)=>state["about"]["Flex214"]);
const Flex214Cb = useFlex214Cb()
const Flex212Props = useStore((state)=>state["about"]["Flex212"]);
const Flex212IoProps = useIoStore((state)=>state["about"]["Flex212"]);
const Flex212Cb = useFlex212Cb()
const Flex213Props = useStore((state)=>state["about"]["Flex213"]);
const Flex213IoProps = useIoStore((state)=>state["about"]["Flex213"]);
const Flex213Cb = useFlex213Cb()
const Flex215Props = useStore((state)=>state["about"]["Flex215"]);
const Flex215IoProps = useIoStore((state)=>state["about"]["Flex215"]);
const Flex215Cb = useFlex215Cb()
const Flex216Props = useStore((state)=>state["about"]["Flex216"]);
const Flex216IoProps = useIoStore((state)=>state["about"]["Flex216"]);
const Flex216Cb = useFlex216Cb()
const Flex217Props = useStore((state)=>state["about"]["Flex217"]);
const Flex217IoProps = useIoStore((state)=>state["about"]["Flex217"]);
const Flex217Cb = useFlex217Cb()
const Flex219Props = useStore((state)=>state["about"]["Flex219"]);
const Flex219IoProps = useIoStore((state)=>state["about"]["Flex219"]);
const Flex219Cb = useFlex219Cb()
const Flex220Props = useStore((state)=>state["about"]["Flex220"]);
const Flex220IoProps = useIoStore((state)=>state["about"]["Flex220"]);
const Flex220Cb = useFlex220Cb()
const Flex222Props = useStore((state)=>state["about"]["Flex222"]);
const Flex222IoProps = useIoStore((state)=>state["about"]["Flex222"]);
const Flex222Cb = useFlex222Cb()
const Flex223Props = useStore((state)=>state["about"]["Flex223"]);
const Flex223IoProps = useIoStore((state)=>state["about"]["Flex223"]);
const Flex223Cb = useFlex223Cb()
const Flex224Props = useStore((state)=>state["about"]["Flex224"]);
const Flex224IoProps = useIoStore((state)=>state["about"]["Flex224"]);
const Flex224Cb = useFlex224Cb()
const Flex228Props = useStore((state)=>state["about"]["Flex228"]);
const Flex228IoProps = useIoStore((state)=>state["about"]["Flex228"]);
const Flex228Cb = useFlex228Cb()
const Flex229Props = useStore((state)=>state["about"]["Flex229"]);
const Flex229IoProps = useIoStore((state)=>state["about"]["Flex229"]);
const Flex229Cb = useFlex229Cb()
const Flex230Props = useStore((state)=>state["about"]["Flex230"]);
const Flex230IoProps = useIoStore((state)=>state["about"]["Flex230"]);
const Flex230Cb = useFlex230Cb()
const Flex234Props = useStore((state)=>state["about"]["Flex234"]);
const Flex234IoProps = useIoStore((state)=>state["about"]["Flex234"]);
const Flex234Cb = useFlex234Cb()
const Flex231Props = useStore((state)=>state["about"]["Flex231"]);
const Flex231IoProps = useIoStore((state)=>state["about"]["Flex231"]);
const Flex231Cb = useFlex231Cb()
const Flex232Props = useStore((state)=>state["about"]["Flex232"]);
const Flex232IoProps = useIoStore((state)=>state["about"]["Flex232"]);
const Flex232Cb = useFlex232Cb()
const Flex233Props = useStore((state)=>state["about"]["Flex233"]);
const Flex233IoProps = useIoStore((state)=>state["about"]["Flex233"]);
const Flex233Cb = useFlex233Cb()
const Flex240Props = useStore((state)=>state["about"]["Flex240"]);
const Flex240IoProps = useIoStore((state)=>state["about"]["Flex240"]);
const Flex240Cb = useFlex240Cb()
const Flex238Props = useStore((state)=>state["about"]["Flex238"]);
const Flex238IoProps = useIoStore((state)=>state["about"]["Flex238"]);
const Flex238Cb = useFlex238Cb()
const Flex237Props = useStore((state)=>state["about"]["Flex237"]);
const Flex237IoProps = useIoStore((state)=>state["about"]["Flex237"]);
const Flex237Cb = useFlex237Cb()
const Flex235Props = useStore((state)=>state["about"]["Flex235"]);
const Flex235IoProps = useIoStore((state)=>state["about"]["Flex235"]);
const Flex235Cb = useFlex235Cb()
const Flex236Props = useStore((state)=>state["about"]["Flex236"]);
const Flex236IoProps = useIoStore((state)=>state["about"]["Flex236"]);
const Flex236Cb = useFlex236Cb()
const Flex239Props = useStore((state)=>state["about"]["Flex239"]);
const Flex239IoProps = useIoStore((state)=>state["about"]["Flex239"]);
const Flex239Cb = useFlex239Cb()
const Div132Props = useStore((state)=>state["about"]["Div132"]);
const Div132IoProps = useIoStore((state)=>state["about"]["Div132"]);
const Div132Cb = useDiv132Cb()
const Flex252Props = useStore((state)=>state["about"]["Flex252"]);
const Flex252IoProps = useIoStore((state)=>state["about"]["Flex252"]);
const Flex252Cb = useFlex252Cb()
const Flex249Props = useStore((state)=>state["about"]["Flex249"]);
const Flex249IoProps = useIoStore((state)=>state["about"]["Flex249"]);
const Flex249Cb = useFlex249Cb()
const Flex245Props = useStore((state)=>state["about"]["Flex245"]);
const Flex245IoProps = useIoStore((state)=>state["about"]["Flex245"]);
const Flex245Cb = useFlex245Cb()
const Flex241Props = useStore((state)=>state["about"]["Flex241"]);
const Flex241IoProps = useIoStore((state)=>state["about"]["Flex241"]);
const Flex241Cb = useFlex241Cb()
const Flex246Props = useStore((state)=>state["about"]["Flex246"]);
const Flex246IoProps = useIoStore((state)=>state["about"]["Flex246"]);
const Flex246Cb = useFlex246Cb()
const Flex250Props = useStore((state)=>state["about"]["Flex250"]);
const Flex250IoProps = useIoStore((state)=>state["about"]["Flex250"]);
const Flex250Cb = useFlex250Cb()
const Flex247Props = useStore((state)=>state["about"]["Flex247"]);
const Flex247IoProps = useIoStore((state)=>state["about"]["Flex247"]);
const Flex247Cb = useFlex247Cb()
const Flex242Props = useStore((state)=>state["about"]["Flex242"]);
const Flex242IoProps = useIoStore((state)=>state["about"]["Flex242"]);
const Flex242Cb = useFlex242Cb()
const Flex243Props = useStore((state)=>state["about"]["Flex243"]);
const Flex243IoProps = useIoStore((state)=>state["about"]["Flex243"]);
const Flex243Cb = useFlex243Cb()
const Flex251Props = useStore((state)=>state["about"]["Flex251"]);
const Flex251IoProps = useIoStore((state)=>state["about"]["Flex251"]);
const Flex251Cb = useFlex251Cb()
const Flex248Props = useStore((state)=>state["about"]["Flex248"]);
const Flex248IoProps = useIoStore((state)=>state["about"]["Flex248"]);
const Flex248Cb = useFlex248Cb()
const Flex244Props = useStore((state)=>state["about"]["Flex244"]);
const Flex244IoProps = useIoStore((state)=>state["about"]["Flex244"]);
const Flex244Cb = useFlex244Cb()
const Div133Props = useStore((state)=>state["about"]["Div133"]);
const Div133IoProps = useIoStore((state)=>state["about"]["Div133"]);
const Div133Cb = useDiv133Cb()
const Div134Props = useStore((state)=>state["about"]["Div134"]);
const Div134IoProps = useIoStore((state)=>state["about"]["Div134"]);
const Div134Cb = useDiv134Cb()
const Div135Props = useStore((state)=>state["about"]["Div135"]);
const Div135IoProps = useIoStore((state)=>state["about"]["Div135"]);
const Div135Cb = useDiv135Cb()
const Div136Props = useStore((state)=>state["about"]["Div136"]);
const Div136IoProps = useIoStore((state)=>state["about"]["Div136"]);
const Div136Cb = useDiv136Cb()
const Div137Props = useStore((state)=>state["about"]["Div137"]);
const Div137IoProps = useIoStore((state)=>state["about"]["Div137"]);
const Div137Cb = useDiv137Cb()
const Div138Props = useStore((state)=>state["about"]["Div138"]);
const Div138IoProps = useIoStore((state)=>state["about"]["Div138"]);
const Div138Cb = useDiv138Cb()
const Image68Props = useStore((state)=>state["about"]["Image68"]);
const Image68IoProps = useIoStore((state)=>state["about"]["Image68"]);
const Image68Cb = useImage68Cb()
const TextBox133Props = useStore((state)=>state["about"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["about"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const TextBox134Props = useStore((state)=>state["about"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["about"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const TextBox135Props = useStore((state)=>state["about"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["about"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const TextBox136Props = useStore((state)=>state["about"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["about"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const TextBox137Props = useStore((state)=>state["about"]["TextBox137"]);
const TextBox137IoProps = useIoStore((state)=>state["about"]["TextBox137"]);
const TextBox137Cb = useTextBox137Cb()
const Button31Props = useStore((state)=>state["about"]["Button31"]);
const Button31IoProps = useIoStore((state)=>state["about"]["Button31"]);
const Button31Cb = useButton31Cb()
const Button32Props = useStore((state)=>state["about"]["Button32"]);
const Button32IoProps = useIoStore((state)=>state["about"]["Button32"]);
const Button32Cb = useButton32Cb()
const TextBox143Props = useStore((state)=>state["about"]["TextBox143"]);
const TextBox143IoProps = useIoStore((state)=>state["about"]["TextBox143"]);
const TextBox143Cb = useTextBox143Cb()
const TextBox144Props = useStore((state)=>state["about"]["TextBox144"]);
const TextBox144IoProps = useIoStore((state)=>state["about"]["TextBox144"]);
const TextBox144Cb = useTextBox144Cb()
const Image70Props = useStore((state)=>state["about"]["Image70"]);
const Image70IoProps = useIoStore((state)=>state["about"]["Image70"]);
const Image70Cb = useImage70Cb()
const Flex204Props = useStore((state)=>state["about"]["Flex204"]);
const Flex204IoProps = useIoStore((state)=>state["about"]["Flex204"]);
const Flex204Cb = useFlex204Cb()
const Image71Props = useStore((state)=>state["about"]["Image71"]);
const Image71IoProps = useIoStore((state)=>state["about"]["Image71"]);
const Image71Cb = useImage71Cb()
const TextBox145Props = useStore((state)=>state["about"]["TextBox145"]);
const TextBox145IoProps = useIoStore((state)=>state["about"]["TextBox145"]);
const TextBox145Cb = useTextBox145Cb()
const Image72Props = useStore((state)=>state["about"]["Image72"]);
const Image72IoProps = useIoStore((state)=>state["about"]["Image72"]);
const Image72Cb = useImage72Cb()
const Image73Props = useStore((state)=>state["about"]["Image73"]);
const Image73IoProps = useIoStore((state)=>state["about"]["Image73"]);
const Image73Cb = useImage73Cb()
const Image74Props = useStore((state)=>state["about"]["Image74"]);
const Image74IoProps = useIoStore((state)=>state["about"]["Image74"]);
const Image74Cb = useImage74Cb()
const Image75Props = useStore((state)=>state["about"]["Image75"]);
const Image75IoProps = useIoStore((state)=>state["about"]["Image75"]);
const Image75Cb = useImage75Cb()
const Image76Props = useStore((state)=>state["about"]["Image76"]);
const Image76IoProps = useIoStore((state)=>state["about"]["Image76"]);
const Image76Cb = useImage76Cb()
const Button37Props = useStore((state)=>state["about"]["Button37"]);
const Button37IoProps = useIoStore((state)=>state["about"]["Button37"]);
const Button37Cb = useButton37Cb()
const TextBox146Props = useStore((state)=>state["about"]["TextBox146"]);
const TextBox146IoProps = useIoStore((state)=>state["about"]["TextBox146"]);
const TextBox146Cb = useTextBox146Cb()
const TextBox147Props = useStore((state)=>state["about"]["TextBox147"]);
const TextBox147IoProps = useIoStore((state)=>state["about"]["TextBox147"]);
const TextBox147Cb = useTextBox147Cb()
const TextBox148Props = useStore((state)=>state["about"]["TextBox148"]);
const TextBox148IoProps = useIoStore((state)=>state["about"]["TextBox148"]);
const TextBox148Cb = useTextBox148Cb()
const TextBox149Props = useStore((state)=>state["about"]["TextBox149"]);
const TextBox149IoProps = useIoStore((state)=>state["about"]["TextBox149"]);
const TextBox149Cb = useTextBox149Cb()
const TextBox150Props = useStore((state)=>state["about"]["TextBox150"]);
const TextBox150IoProps = useIoStore((state)=>state["about"]["TextBox150"]);
const TextBox150Cb = useTextBox150Cb()
const TextBox151Props = useStore((state)=>state["about"]["TextBox151"]);
const TextBox151IoProps = useIoStore((state)=>state["about"]["TextBox151"]);
const TextBox151Cb = useTextBox151Cb()
const Button38Props = useStore((state)=>state["about"]["Button38"]);
const Button38IoProps = useIoStore((state)=>state["about"]["Button38"]);
const Button38Cb = useButton38Cb()
const Image77Props = useStore((state)=>state["about"]["Image77"]);
const Image77IoProps = useIoStore((state)=>state["about"]["Image77"]);
const Image77Cb = useImage77Cb()
const TextBox152Props = useStore((state)=>state["about"]["TextBox152"]);
const TextBox152IoProps = useIoStore((state)=>state["about"]["TextBox152"]);
const TextBox152Cb = useTextBox152Cb()
const TextBox153Props = useStore((state)=>state["about"]["TextBox153"]);
const TextBox153IoProps = useIoStore((state)=>state["about"]["TextBox153"]);
const TextBox153Cb = useTextBox153Cb()
const Image78Props = useStore((state)=>state["about"]["Image78"]);
const Image78IoProps = useIoStore((state)=>state["about"]["Image78"]);
const Image78Cb = useImage78Cb()
const TextBox154Props = useStore((state)=>state["about"]["TextBox154"]);
const TextBox154IoProps = useIoStore((state)=>state["about"]["TextBox154"]);
const TextBox154Cb = useTextBox154Cb()
const TextBox155Props = useStore((state)=>state["about"]["TextBox155"]);
const TextBox155IoProps = useIoStore((state)=>state["about"]["TextBox155"]);
const TextBox155Cb = useTextBox155Cb()
const TextBox156Props = useStore((state)=>state["about"]["TextBox156"]);
const TextBox156IoProps = useIoStore((state)=>state["about"]["TextBox156"]);
const TextBox156Cb = useTextBox156Cb()
const TextBox157Props = useStore((state)=>state["about"]["TextBox157"]);
const TextBox157IoProps = useIoStore((state)=>state["about"]["TextBox157"]);
const TextBox157Cb = useTextBox157Cb()
const TextBox158Props = useStore((state)=>state["about"]["TextBox158"]);
const TextBox158IoProps = useIoStore((state)=>state["about"]["TextBox158"]);
const TextBox158Cb = useTextBox158Cb()
const TextBox159Props = useStore((state)=>state["about"]["TextBox159"]);
const TextBox159IoProps = useIoStore((state)=>state["about"]["TextBox159"]);
const TextBox159Cb = useTextBox159Cb()
const Image79Props = useStore((state)=>state["about"]["Image79"]);
const Image79IoProps = useIoStore((state)=>state["about"]["Image79"]);
const Image79Cb = useImage79Cb()
const TextBox160Props = useStore((state)=>state["about"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["about"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()
const TextBox161Props = useStore((state)=>state["about"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["about"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const TextBox162Props = useStore((state)=>state["about"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["about"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const Image80Props = useStore((state)=>state["about"]["Image80"]);
const Image80IoProps = useIoStore((state)=>state["about"]["Image80"]);
const Image80Cb = useImage80Cb()
const TextBox166Props = useStore((state)=>state["about"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["about"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const Image82Props = useStore((state)=>state["about"]["Image82"]);
const Image82IoProps = useIoStore((state)=>state["about"]["Image82"]);
const Image82Cb = useImage82Cb()
const TextBox167Props = useStore((state)=>state["about"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["about"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const TextBox168Props = useStore((state)=>state["about"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["about"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const TextBox169Props = useStore((state)=>state["about"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["about"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const TextBox170Props = useStore((state)=>state["about"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["about"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const Image83Props = useStore((state)=>state["about"]["Image83"]);
const Image83IoProps = useIoStore((state)=>state["about"]["Image83"]);
const Image83Cb = useImage83Cb()
const TextBox171Props = useStore((state)=>state["about"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["about"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const TextBox172Props = useStore((state)=>state["about"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["about"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const Image84Props = useStore((state)=>state["about"]["Image84"]);
const Image84IoProps = useIoStore((state)=>state["about"]["Image84"]);
const Image84Cb = useImage84Cb()
const Image85Props = useStore((state)=>state["about"]["Image85"]);
const Image85IoProps = useIoStore((state)=>state["about"]["Image85"]);
const Image85Cb = useImage85Cb()
const TextBox173Props = useStore((state)=>state["about"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["about"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const TextBox174Props = useStore((state)=>state["about"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["about"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const Image86Props = useStore((state)=>state["about"]["Image86"]);
const Image86IoProps = useIoStore((state)=>state["about"]["Image86"]);
const Image86Cb = useImage86Cb()
const TextBox175Props = useStore((state)=>state["about"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["about"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const TextBox176Props = useStore((state)=>state["about"]["TextBox176"]);
const TextBox176IoProps = useIoStore((state)=>state["about"]["TextBox176"]);
const TextBox176Cb = useTextBox176Cb()
const TextBox177Props = useStore((state)=>state["about"]["TextBox177"]);
const TextBox177IoProps = useIoStore((state)=>state["about"]["TextBox177"]);
const TextBox177Cb = useTextBox177Cb()
const TextBox178Props = useStore((state)=>state["about"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["about"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const Image87Props = useStore((state)=>state["about"]["Image87"]);
const Image87IoProps = useIoStore((state)=>state["about"]["Image87"]);
const Image87Cb = useImage87Cb()
const Image92Props = useStore((state)=>state["about"]["Image92"]);
const Image92IoProps = useIoStore((state)=>state["about"]["Image92"]);
const Image92Cb = useImage92Cb()
const Image93Props = useStore((state)=>state["about"]["Image93"]);
const Image93IoProps = useIoStore((state)=>state["about"]["Image93"]);
const Image93Cb = useImage93Cb()
const Image88Props = useStore((state)=>state["about"]["Image88"]);
const Image88IoProps = useIoStore((state)=>state["about"]["Image88"]);
const Image88Cb = useImage88Cb()
const Image89Props = useStore((state)=>state["about"]["Image89"]);
const Image89IoProps = useIoStore((state)=>state["about"]["Image89"]);
const Image89Cb = useImage89Cb()
const Image90Props = useStore((state)=>state["about"]["Image90"]);
const Image90IoProps = useIoStore((state)=>state["about"]["Image90"]);
const Image90Cb = useImage90Cb()
const Image91Props = useStore((state)=>state["about"]["Image91"]);
const Image91IoProps = useIoStore((state)=>state["about"]["Image91"]);
const Image91Cb = useImage91Cb()
const Button39Props = useStore((state)=>state["about"]["Button39"]);
const Button39IoProps = useIoStore((state)=>state["about"]["Button39"]);
const Button39Cb = useButton39Cb()
const TextBox179Props = useStore((state)=>state["about"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["about"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const TextBox180Props = useStore((state)=>state["about"]["TextBox180"]);
const TextBox180IoProps = useIoStore((state)=>state["about"]["TextBox180"]);
const TextBox180Cb = useTextBox180Cb()
const TextBox181Props = useStore((state)=>state["about"]["TextBox181"]);
const TextBox181IoProps = useIoStore((state)=>state["about"]["TextBox181"]);
const TextBox181Cb = useTextBox181Cb()
const TextBox182Props = useStore((state)=>state["about"]["TextBox182"]);
const TextBox182IoProps = useIoStore((state)=>state["about"]["TextBox182"]);
const TextBox182Cb = useTextBox182Cb()
const TextBox183Props = useStore((state)=>state["about"]["TextBox183"]);
const TextBox183IoProps = useIoStore((state)=>state["about"]["TextBox183"]);
const TextBox183Cb = useTextBox183Cb()
const TextBox184Props = useStore((state)=>state["about"]["TextBox184"]);
const TextBox184IoProps = useIoStore((state)=>state["about"]["TextBox184"]);
const TextBox184Cb = useTextBox184Cb()
const TextBox185Props = useStore((state)=>state["about"]["TextBox185"]);
const TextBox185IoProps = useIoStore((state)=>state["about"]["TextBox185"]);
const TextBox185Cb = useTextBox185Cb()
const TextBox186Props = useStore((state)=>state["about"]["TextBox186"]);
const TextBox186IoProps = useIoStore((state)=>state["about"]["TextBox186"]);
const TextBox186Cb = useTextBox186Cb()
const TextBox187Props = useStore((state)=>state["about"]["TextBox187"]);
const TextBox187IoProps = useIoStore((state)=>state["about"]["TextBox187"]);
const TextBox187Cb = useTextBox187Cb()
const TextBox188Props = useStore((state)=>state["about"]["TextBox188"]);
const TextBox188IoProps = useIoStore((state)=>state["about"]["TextBox188"]);
const TextBox188Cb = useTextBox188Cb()
const TextBox189Props = useStore((state)=>state["about"]["TextBox189"]);
const TextBox189IoProps = useIoStore((state)=>state["about"]["TextBox189"]);
const TextBox189Cb = useTextBox189Cb()
const TextBox190Props = useStore((state)=>state["about"]["TextBox190"]);
const TextBox190IoProps = useIoStore((state)=>state["about"]["TextBox190"]);
const TextBox190Cb = useTextBox190Cb()
const TextBox191Props = useStore((state)=>state["about"]["TextBox191"]);
const TextBox191IoProps = useIoStore((state)=>state["about"]["TextBox191"]);
const TextBox191Cb = useTextBox191Cb()
const TextBox192Props = useStore((state)=>state["about"]["TextBox192"]);
const TextBox192IoProps = useIoStore((state)=>state["about"]["TextBox192"]);
const TextBox192Cb = useTextBox192Cb()
const TextBox193Props = useStore((state)=>state["about"]["TextBox193"]);
const TextBox193IoProps = useIoStore((state)=>state["about"]["TextBox193"]);
const TextBox193Cb = useTextBox193Cb()
const TextBox194Props = useStore((state)=>state["about"]["TextBox194"]);
const TextBox194IoProps = useIoStore((state)=>state["about"]["TextBox194"]);
const TextBox194Cb = useTextBox194Cb()
const TextBox195Props = useStore((state)=>state["about"]["TextBox195"]);
const TextBox195IoProps = useIoStore((state)=>state["about"]["TextBox195"]);
const TextBox195Cb = useTextBox195Cb()
const TextBox197Props = useStore((state)=>state["about"]["TextBox197"]);
const TextBox197IoProps = useIoStore((state)=>state["about"]["TextBox197"]);
const TextBox197Cb = useTextBox197Cb()
const Image99Props = useStore((state)=>state["about"]["Image99"]);
const Image99IoProps = useIoStore((state)=>state["about"]["Image99"]);
const Image99Cb = useImage99Cb()
const Image100Props = useStore((state)=>state["about"]["Image100"]);
const Image100IoProps = useIoStore((state)=>state["about"]["Image100"]);
const Image100Cb = useImage100Cb()
const Image101Props = useStore((state)=>state["about"]["Image101"]);
const Image101IoProps = useIoStore((state)=>state["about"]["Image101"]);
const Image101Cb = useImage101Cb()
const Image102Props = useStore((state)=>state["about"]["Image102"]);
const Image102IoProps = useIoStore((state)=>state["about"]["Image102"]);
const Image102Cb = useImage102Cb()
const Image103Props = useStore((state)=>state["about"]["Image103"]);
const Image103IoProps = useIoStore((state)=>state["about"]["Image103"]);
const Image103Cb = useImage103Cb()
const Image94Props = useStore((state)=>state["about"]["Image94"]);
const Image94IoProps = useIoStore((state)=>state["about"]["Image94"]);
const Image94Cb = useImage94Cb()
const Image95Props = useStore((state)=>state["about"]["Image95"]);
const Image95IoProps = useIoStore((state)=>state["about"]["Image95"]);
const Image95Cb = useImage95Cb()
const Image96Props = useStore((state)=>state["about"]["Image96"]);
const Image96IoProps = useIoStore((state)=>state["about"]["Image96"]);
const Image96Cb = useImage96Cb()
const Image97Props = useStore((state)=>state["about"]["Image97"]);
const Image97IoProps = useIoStore((state)=>state["about"]["Image97"]);
const Image97Cb = useImage97Cb()
const Image98Props = useStore((state)=>state["about"]["Image98"]);
const Image98IoProps = useIoStore((state)=>state["about"]["Image98"]);
const Image98Cb = useImage98Cb()
const TextBox196Props = useStore((state)=>state["about"]["TextBox196"]);
const TextBox196IoProps = useIoStore((state)=>state["about"]["TextBox196"]);
const TextBox196Cb = useTextBox196Cb()

  return (<>
  <Flex1 className="p-about Flex194 bpt" {...Flex194Props} {...Flex194Cb} {...Flex194IoProps}>
<Flex1 className="p-about Flex192 bpt" {...Flex192Props} {...Flex192Cb} {...Flex192IoProps}>
<Image1 className="p-about Image68 bpt" {...Image68Props} {...Image68Cb} {...Image68IoProps}/>
<Flex1 className="p-about Flex191 bpt" {...Flex191Props} {...Flex191Cb} {...Flex191IoProps}>
<TextBox1 className="p-about TextBox137 bpt" {...TextBox137Props} {...TextBox137Cb} {...TextBox137IoProps}/>
<TextBox1 className="p-about TextBox136 bpt" {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
<TextBox1 className="p-about TextBox135 bpt" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
<TextBox1 className="p-about TextBox134 bpt" {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
<TextBox1 className="p-about TextBox133 bpt" {...TextBox133Props} {...TextBox133Cb} {...TextBox133IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex193 bpt" {...Flex193Props} {...Flex193Cb} {...Flex193IoProps}>
<Button1 className="p-about Button32 bpt" {...Button32Props} {...Button32Cb} {...Button32IoProps}/>
<Button1 className="p-about Button31 bpt" {...Button31Props} {...Button31Cb} {...Button31IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex199 bpt" {...Flex199Props} {...Flex199Cb} {...Flex199IoProps}>
<Flex1 className="p-about Flex200 bpt" {...Flex200Props} {...Flex200Cb} {...Flex200IoProps}>
<TextBox1 className="p-about TextBox143 bpt" {...TextBox143Props} {...TextBox143Cb} {...TextBox143IoProps}/>
<TextBox1 className="p-about TextBox144 bpt" {...TextBox144Props} {...TextBox144Cb} {...TextBox144IoProps}/>
</Flex1>
<Flex1 className="p-about Flex201 bpt" {...Flex201Props} {...Flex201Cb} {...Flex201IoProps}>
<Image1 className="p-about Image70 bpt" {...Image70Props} {...Image70Cb} {...Image70IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex202 bpt" {...Flex202Props} {...Flex202Cb} {...Flex202IoProps}>
<Flex1 className="p-about Flex203 bpt" {...Flex203Props} {...Flex203Cb} {...Flex203IoProps}>
<Image1 className="p-about Image71 bpt" {...Image71Props} {...Image71Cb} {...Image71IoProps}/>
</Flex1>
<Flex1 className="p-about Flex204 bpt" {...Flex204Props} {...Flex204Cb} {...Flex204IoProps}/>
</Flex1>
<Flex1 className="p-about Flex205 bpt" {...Flex205Props} {...Flex205Cb} {...Flex205IoProps}>
<Flex1 className="p-about Flex206 bpt" {...Flex206Props} {...Flex206Cb} {...Flex206IoProps}>
<TextBox1 className="p-about TextBox145 bpt" {...TextBox145Props} {...TextBox145Cb} {...TextBox145IoProps}/>
<Image1 className="p-about Image72 bpt" {...Image72Props} {...Image72Cb} {...Image72IoProps}/>
<Image1 className="p-about Image73 bpt" {...Image73Props} {...Image73Cb} {...Image73IoProps}/>
<Image1 className="p-about Image74 bpt" {...Image74Props} {...Image74Cb} {...Image74IoProps}/>
<Image1 className="p-about Image75 bpt" {...Image75Props} {...Image75Cb} {...Image75IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex207 bpt" {...Flex207Props} {...Flex207Cb} {...Flex207IoProps}>
<Flex1 className="p-about Flex208 bpt" {...Flex208Props} {...Flex208Cb} {...Flex208IoProps}>
<Flex1 className="p-about Flex210 bpt" {...Flex210Props} {...Flex210Cb} {...Flex210IoProps}>
<Image1 className="p-about Image76 bpt" {...Image76Props} {...Image76Cb} {...Image76IoProps}/>
</Flex1>
<Flex1 className="p-about Flex211 bpt" {...Flex211Props} {...Flex211Cb} {...Flex211IoProps}>
<TextBox1 className="p-about TextBox146 bpt" {...TextBox146Props} {...TextBox146Cb} {...TextBox146IoProps}/>
<TextBox1 className="p-about TextBox147 bpt" {...TextBox147Props} {...TextBox147Cb} {...TextBox147IoProps}/>
<TextBox1 className="p-about TextBox148 bpt" {...TextBox148Props} {...TextBox148Cb} {...TextBox148IoProps}/>
<Button1 className="p-about Button37 bpt" {...Button37Props} {...Button37Cb} {...Button37IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex214 bpt" {...Flex214Props} {...Flex214Cb} {...Flex214IoProps}>
<Flex1 className="p-about Flex213 bpt" {...Flex213Props} {...Flex213Cb} {...Flex213IoProps}>
<Image1 className="p-about Image77 bpt" {...Image77Props} {...Image77Cb} {...Image77IoProps}/>
</Flex1>
<Flex1 className="p-about Flex212 bpt" {...Flex212Props} {...Flex212Cb} {...Flex212IoProps}>
<TextBox1 className="p-about TextBox151 bpt" {...TextBox151Props} {...TextBox151Cb} {...TextBox151IoProps}/>
<TextBox1 className="p-about TextBox150 bpt" {...TextBox150Props} {...TextBox150Cb} {...TextBox150IoProps}/>
<TextBox1 className="p-about TextBox149 bpt" {...TextBox149Props} {...TextBox149Cb} {...TextBox149IoProps}/>
<Button1 className="p-about Button38 bpt" {...Button38Props} {...Button38Cb} {...Button38IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex215 bpt" {...Flex215Props} {...Flex215Cb} {...Flex215IoProps}>
<TextBox1 className="p-about TextBox152 bpt" {...TextBox152Props} {...TextBox152Cb} {...TextBox152IoProps}/>
<TextBox1 className="p-about TextBox153 bpt" {...TextBox153Props} {...TextBox153Cb} {...TextBox153IoProps}/>
<Flex1 className="p-about Flex216 bpt" {...Flex216Props} {...Flex216Cb} {...Flex216IoProps}>
<Flex1 className="p-about Flex217 bpt" {...Flex217Props} {...Flex217Cb} {...Flex217IoProps}>
<Image1 className="p-about Image78 bpt" {...Image78Props} {...Image78Cb} {...Image78IoProps}/>
<TextBox1 className="p-about TextBox154 bpt" {...TextBox154Props} {...TextBox154Cb} {...TextBox154IoProps}/>
<TextBox1 className="p-about TextBox156 bpt" {...TextBox156Props} {...TextBox156Cb} {...TextBox156IoProps}/>
<TextBox1 className="p-about TextBox155 bpt" {...TextBox155Props} {...TextBox155Cb} {...TextBox155IoProps}/>
</Flex1>
<Flex1 className="p-about Flex219 bpt" {...Flex219Props} {...Flex219Cb} {...Flex219IoProps}>
<Image1 className="p-about Image79 bpt" {...Image79Props} {...Image79Cb} {...Image79IoProps}/>
<TextBox1 className="p-about TextBox159 bpt" {...TextBox159Props} {...TextBox159Cb} {...TextBox159IoProps}/>
<TextBox1 className="p-about TextBox157 bpt" {...TextBox157Props} {...TextBox157Cb} {...TextBox157IoProps}/>
<TextBox1 className="p-about TextBox158 bpt" {...TextBox158Props} {...TextBox158Cb} {...TextBox158IoProps}/>
</Flex1>
<Flex1 className="p-about Flex220 bpt" {...Flex220Props} {...Flex220Cb} {...Flex220IoProps}>
<Image1 className="p-about Image80 bpt" {...Image80Props} {...Image80Cb} {...Image80IoProps}/>
<TextBox1 className="p-about TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
<TextBox1 className="p-about TextBox160 bpt" {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
<TextBox1 className="p-about TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex222 bpt" {...Flex222Props} {...Flex222Cb} {...Flex222IoProps}>
<TextBox1 className="p-about TextBox166 bpt" {...TextBox166Props} {...TextBox166Cb} {...TextBox166IoProps}/>
<Flex1 className="p-about Flex223 bpt" {...Flex223Props} {...Flex223Cb} {...Flex223IoProps}>
<Flex1 className="p-about Flex224 bpt" {...Flex224Props} {...Flex224Cb} {...Flex224IoProps}>
<Flex1 className="p-about Flex228 bpt" {...Flex228Props} {...Flex228Cb} {...Flex228IoProps}>
<Image1 className="p-about Image82 bpt" {...Image82Props} {...Image82Cb} {...Image82IoProps}/>
<TextBox1 className="p-about TextBox167 bpt" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
<TextBox1 className="p-about TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
</Flex1>
<Flex1 className="p-about Flex229 bpt" {...Flex229Props} {...Flex229Cb} {...Flex229IoProps}>
<Image1 className="p-about Image83 bpt" {...Image83Props} {...Image83Cb} {...Image83IoProps}/>
<TextBox1 className="p-about TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
<TextBox1 className="p-about TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
</Flex1>
<Flex1 className="p-about Flex230 bpt" {...Flex230Props} {...Flex230Cb} {...Flex230IoProps}>
<Image1 className="p-about Image84 bpt" {...Image84Props} {...Image84Cb} {...Image84IoProps}/>
<TextBox1 className="p-about TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
<TextBox1 className="p-about TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex234 bpt" {...Flex234Props} {...Flex234Cb} {...Flex234IoProps}>
<Flex1 className="p-about Flex233 bpt" {...Flex233Props} {...Flex233Cb} {...Flex233IoProps}>
<Image1 className="p-about Image87 bpt" {...Image87Props} {...Image87Cb} {...Image87IoProps}/>
<TextBox1 className="p-about TextBox178 bpt" {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
<TextBox1 className="p-about TextBox177 bpt" {...TextBox177Props} {...TextBox177Cb} {...TextBox177IoProps}/>
</Flex1>
<Flex1 className="p-about Flex232 bpt" {...Flex232Props} {...Flex232Cb} {...Flex232IoProps}>
<Image1 className="p-about Image86 bpt" {...Image86Props} {...Image86Cb} {...Image86IoProps}/>
<TextBox1 className="p-about TextBox175 bpt" {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
<TextBox1 className="p-about TextBox176 bpt" {...TextBox176Props} {...TextBox176Cb} {...TextBox176IoProps}/>
</Flex1>
<Flex1 className="p-about Flex231 bpt" {...Flex231Props} {...Flex231Cb} {...Flex231IoProps}>
<Image1 className="p-about Image85 bpt" {...Image85Props} {...Image85Cb} {...Image85IoProps}/>
<TextBox1 className="p-about TextBox173 bpt" {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
<TextBox1 className="p-about TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex240 bpt" {...Flex240Props} {...Flex240Cb} {...Flex240IoProps}>
<Flex1 className="p-about Flex239 bpt" {...Flex239Props} {...Flex239Cb} {...Flex239IoProps}>
<Div1 className="p-about Div132 bpt" {...Div132Props} {...Div132Cb} {...Div132IoProps}>
<TextBox1 className="p-about TextBox179 bpt" {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
</Div1>
<Button1 className="p-about Button39 bpt" {...Button39Props} {...Button39Cb} {...Button39IoProps}/>
</Flex1>
<Flex1 className="p-about Flex238 bpt" {...Flex238Props} {...Flex238Cb} {...Flex238IoProps}>
<Image1 className="p-about Image93 bpt" {...Image93Props} {...Image93Cb} {...Image93IoProps}/>
<Image1 className="p-about Image92 bpt" {...Image92Props} {...Image92Cb} {...Image92IoProps}/>
<Flex1 className="p-about Flex237 bpt" {...Flex237Props} {...Flex237Cb} {...Flex237IoProps}>
<Flex1 className="p-about Flex236 bpt" {...Flex236Props} {...Flex236Cb} {...Flex236IoProps}>
<Image1 className="p-about Image91 bpt" {...Image91Props} {...Image91Cb} {...Image91IoProps}/>
<Image1 className="p-about Image90 bpt" {...Image90Props} {...Image90Cb} {...Image90IoProps}/>
</Flex1>
<Flex1 className="p-about Flex235 bpt" {...Flex235Props} {...Flex235Cb} {...Flex235IoProps}>
<Image1 className="p-about Image89 bpt" {...Image89Props} {...Image89Cb} {...Image89IoProps}/>
<Image1 className="p-about Image88 bpt" {...Image88Props} {...Image88Cb} {...Image88IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex252 bpt" {...Flex252Props} {...Flex252Cb} {...Flex252IoProps}>
<Flex1 className="p-about Flex251 bpt" {...Flex251Props} {...Flex251Cb} {...Flex251IoProps}>
<Image1 className="p-about Image103 bpt" {...Image103Props} {...Image103Cb} {...Image103IoProps}/>
<Div1 className="p-about Div138 bpt" {...Div138Props} {...Div138Cb} {...Div138IoProps}>
<TextBox1 className="p-about TextBox196 bpt" {...TextBox196Props} {...TextBox196Cb} {...TextBox196IoProps}/>
</Div1>
<Flex1 className="p-about Flex248 bpt" {...Flex248Props} {...Flex248Cb} {...Flex248IoProps}>
<Flex1 className="p-about Flex244 bpt" {...Flex244Props} {...Flex244Cb} {...Flex244IoProps}>
<Div1 className="p-about Div133 bpt" {...Div133Props} {...Div133Cb} {...Div133IoProps}>
<Image1 className="p-about Image94 bpt" {...Image94Props} {...Image94Cb} {...Image94IoProps}/>
</Div1>
<Div1 className="p-about Div134 bpt" {...Div134Props} {...Div134Cb} {...Div134IoProps}>
<Image1 className="p-about Image95 bpt" {...Image95Props} {...Image95Cb} {...Image95IoProps}/>
</Div1>
<Div1 className="p-about Div135 bpt" {...Div135Props} {...Div135Cb} {...Div135IoProps}>
<Image1 className="p-about Image96 bpt" {...Image96Props} {...Image96Cb} {...Image96IoProps}/>
</Div1>
<Div1 className="p-about Div136 bpt" {...Div136Props} {...Div136Cb} {...Div136IoProps}>
<Image1 className="p-about Image97 bpt" {...Image97Props} {...Image97Cb} {...Image97IoProps}/>
</Div1>
<Div1 className="p-about Div137 bpt" {...Div137Props} {...Div137Cb} {...Div137IoProps}>
<Image1 className="p-about Image98 bpt" {...Image98Props} {...Image98Cb} {...Image98IoProps}/>
</Div1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex249 bpt" {...Flex249Props} {...Flex249Cb} {...Flex249IoProps}>
<Flex1 className="p-about Flex246 bpt" {...Flex246Props} {...Flex246Cb} {...Flex246IoProps}>
<TextBox1 className="p-about TextBox195 bpt" {...TextBox195Props} {...TextBox195Cb} {...TextBox195IoProps}/>
<TextBox1 className="p-about TextBox188 bpt" {...TextBox188Props} {...TextBox188Cb} {...TextBox188IoProps}/>
<TextBox1 className="p-about TextBox189 bpt" {...TextBox189Props} {...TextBox189Cb} {...TextBox189IoProps}/>
<TextBox1 className="p-about TextBox191 bpt" {...TextBox191Props} {...TextBox191Cb} {...TextBox191IoProps}/>
<TextBox1 className="p-about TextBox190 bpt" {...TextBox190Props} {...TextBox190Cb} {...TextBox190IoProps}/>
<TextBox1 className="p-about TextBox192 bpt" {...TextBox192Props} {...TextBox192Cb} {...TextBox192IoProps}/>
<TextBox1 className="p-about TextBox193 bpt" {...TextBox193Props} {...TextBox193Cb} {...TextBox193IoProps}/>
<TextBox1 className="p-about TextBox194 bpt" {...TextBox194Props} {...TextBox194Cb} {...TextBox194IoProps}/>
</Flex1>
<Flex1 className="p-about Flex245 bpt" {...Flex245Props} {...Flex245Cb} {...Flex245IoProps}>
<Flex1 className="p-about Flex241 bpt" {...Flex241Props} {...Flex241Cb} {...Flex241IoProps}>
<TextBox1 className="p-about TextBox180 bpt" {...TextBox180Props} {...TextBox180Cb} {...TextBox180IoProps}/>
<TextBox1 className="p-about TextBox187 bpt" {...TextBox187Props} {...TextBox187Cb} {...TextBox187IoProps}/>
<TextBox1 className="p-about TextBox182 bpt" {...TextBox182Props} {...TextBox182Cb} {...TextBox182IoProps}/>
<TextBox1 className="p-about TextBox183 bpt" {...TextBox183Props} {...TextBox183Cb} {...TextBox183IoProps}/>
<TextBox1 className="p-about TextBox185 bpt" {...TextBox185Props} {...TextBox185Cb} {...TextBox185IoProps}/>
<TextBox1 className="p-about TextBox184 bpt" {...TextBox184Props} {...TextBox184Cb} {...TextBox184IoProps}/>
<TextBox1 className="p-about TextBox186 bpt" {...TextBox186Props} {...TextBox186Cb} {...TextBox186IoProps}/>
<TextBox1 className="p-about TextBox181 bpt" {...TextBox181Props} {...TextBox181Cb} {...TextBox181IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex250 bpt" {...Flex250Props} {...Flex250Cb} {...Flex250IoProps}>
<TextBox1 className="p-about TextBox197 bpt" {...TextBox197Props} {...TextBox197Cb} {...TextBox197IoProps}/>
<Flex1 className="p-about Flex247 bpt" {...Flex247Props} {...Flex247Cb} {...Flex247IoProps}>
<Flex1 className="p-about Flex242 bpt" {...Flex242Props} {...Flex242Cb} {...Flex242IoProps}>
<Image1 className="p-about Image99 bpt" {...Image99Props} {...Image99Cb} {...Image99IoProps}/>
<Image1 className="p-about Image100 bpt" {...Image100Props} {...Image100Cb} {...Image100IoProps}/>
</Flex1>
<Flex1 className="p-about Flex243 bpt" {...Flex243Props} {...Flex243Cb} {...Flex243IoProps}>
<Image1 className="p-about Image101 bpt" {...Image101Props} {...Image101Cb} {...Image101IoProps}/>
<Image1 className="p-about Image102 bpt" {...Image102Props} {...Image102Cb} {...Image102IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
  </>);
}
