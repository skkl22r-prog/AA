import { useEffect, useState } from "react";
import { CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type State =
  | { kind: "loading" }
  | { kind: "ok"; name: string; guestCount: string }
| { kind: "already"; name: string; guestCount: string }
  | { kind: "not_found" }
  | { kind: "error" };

const Scan = () => {
  const { token } = useParams<{ token: string }>();
  const cleanToken = decodeURIComponent(token || "");

  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
  let isMounted = true;

  const run = async () => {
    if (!cleanToken) {
      if (isMounted) setState({ kind: "not_found" });
      return;
    }

    if (isMounted) setState({ kind: "loading" });

    const { data, error } = await supabase
     .from("rsvpsRoko")
.select("name, guest_count, scanned")
      .eq("qr_token", cleanToken)
      .maybeSingle();
console.log("TOKEN:", cleanToken);
console.log("DATA:", data);
console.log("ERROR:", error);

    if (!isMounted) return;

    if (error || !data) {
      setState({ kind: "not_found" });
      return;
    }

if (data.scanned) {
  setState({
    kind: "already",
    name: data.name,
    guestCount: data.guest_count,
  });
  return;
}

// تحديث scanned
const { error: updateError } = await supabase
  .from("rsvpsRoko")
  .update({ scanned: true })
  .eq("qr_token", cleanToken);

if (updateError) {
  setState({ kind: "error" });
  return;
}

setState({
  kind: "ok",
  name: data.name,
  guestCount: data.guest_count,
});
  };

  run();

  return () => {
    isMounted = false;
  };
}, [cleanToken]);

 if (state.kind === "loading") {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background:
          "linear-gradient(180deg,#FCFBFD 0%,#F2EEF6 50%,#FCFBFD 100%)",
      }}
    >
      <p
        className="text-xl font-semibold"
        style={{ color: "#A882B8" }}
      >
        جارٍ التحقق...
      </p>
    </div>
  );
}

 if (state.kind === "ok") {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background:
          "linear-gradient(180deg,#FCFBFD 0%,#F2EEF6 50%,#FCFBFD 100%)",
      }}
    >
      <div
        className="w-full max-w-md rounded-[28px] p-8 text-center"
        style={{
          background: "#FFFDFB",
          border: "1px solid #D8C8D9",
          boxShadow: "0 10px 30px rgba(120,85,140,.12)",
        }}
      >
        <div
          style={{
            color: "#A882B8",
            fontSize: "90px",
            lineHeight: 1,
            marginBottom: "20px",
          }}
        >
          <div className="flex justify-center mb-5">
  <CheckCircle2
    size={88}
    strokeWidth={1.8}
    style={{ color: "#A882B8" }}
  />
</div>
        </div>

        <h1
          className="text-3xl font-bold mb-2"
          style={{ color: "#3C2E23" }}
        >
          تم المسح بنجاح
        </h1>

        <p
          className="mb-8"
          style={{ color: "#7A6A82" }}
        >
          تم التحقق من الدعوة بنجاح
        </p>

        <div
          className="rounded-2xl p-5 text-right"
          style={{
            background: "#F8F5FA",
            border: "1px solid #E5D8EC",
          }}
        >
          <div className="mb-4">
            <div
              className="text-sm mb-1"
              style={{ color: "#7A6A82" }}
            >
              الاسم
            </div>

            <div
              className="text-lg font-semibold"
              style={{ color: "#3C2E23" }}
            >
              {state.name}
            </div>
          </div>

          <div>
            <div
              className="text-sm mb-1"
              style={{ color: "#7A6A82" }}
            >
              عدد المرافقين
            </div>

            <div
              className="text-lg font-semibold"
              style={{ color: "#3C2E23" }}
            >
              {state.guestCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

if (state.kind === "already") {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background:
          "linear-gradient(180deg,#FCFBFD 0%,#F2EEF6 50%,#FCFBFD 100%)",
      }}
    >
      <div
        className="w-full max-w-md rounded-[28px] p-8 text-center"
        style={{
          background: "#FFFDFB",
          border: "1px solid #D8C8D9",
          boxShadow: "0 10px 30px rgba(120,85,140,.12)",
        }}
      >
        <div
          style={{
            color: "#A882B8",
            fontSize: "90px",
            lineHeight: 1,
            marginBottom: "20px",
          }}
        >
          <div className="flex justify-center mb-5">
  <AlertCircle
    size={88}
    strokeWidth={1.8}
    style={{ color: "#A882B8" }}
  />
</div>
        </div>

        <h1
          className="text-3xl font-bold mb-2"
          style={{ color: "#3C2E23" }}
        >
          تم مسح الباركود مسبقًا
        </h1>

        <p
          className="mb-8"
          style={{ color: "#7A6A82" }}
        >
          تم استخدام هذه الدعوة مسبقًا.
        </p>

        <div
          className="rounded-2xl p-5 text-right"
          style={{
            background: "#F8F5FA",
            border: "1px solid #E5D8EC",
          }}
        >
          <div className="mb-4">
            <div
              className="text-sm mb-1"
              style={{ color: "#7A6A82" }}
            >
              الاسم
            </div>

            <div
              className="text-lg font-semibold"
              style={{ color: "#3C2E23" }}
            >
              {state.name}
            </div>
          </div>

          <div>
            <div
              className="text-sm mb-1"
              style={{ color: "#7A6A82" }}
            >
              عدد المرافقين
            </div>

            <div
              className="text-lg font-semibold"
              style={{ color: "#3C2E23" }}
            >
              {state.guestCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

if (state.kind === "not_found") {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background:
          "linear-gradient(180deg,#FCFBFD 0%,#F2EEF6 50%,#FCFBFD 100%)",
      }}
    >
      <div
        className="w-full max-w-md rounded-[28px] p-8 text-center"
        style={{
          background: "#FFFDFB",
          border: "1px solid #D8C8D9",
          boxShadow: "0 10px 30px rgba(120,85,140,.12)",
        }}
      >
        <div
          style={{
            color: "#A882B8",
            fontSize: "90px",
            lineHeight: 1,
            marginBottom: "20px",
          }}
        >
          <div className="flex justify-center mb-5">
  <XCircle
    size={88}
    strokeWidth={1.8}
    style={{ color: "#A882B8" }}
  />
</div>
        </div>

        <h1
          className="text-3xl font-bold mb-2"
          style={{ color: "#3C2E23" }}
        >
          الباركود غير صالح
        </h1>

        <p
          style={{
            color: "#7A6A82",
          }}
        >
          يرجى التأكد من صحة الباركود ثم إعادة المحاولة.
        </p>
      </div>
    </div>
  );
}
};

export default Scan;
