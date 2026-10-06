import { useEffect, useRef } from "react";
import { Map, Marker, NavigationControl, AttributionControl, setWorkerUrl } from "maplibre-gl";
import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";
import "maplibre-gl/dist/maplibre-gl.css";

setWorkerUrl(workerUrl);

export default function BostonMap({ label }: { label: string }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    let map: Map | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || !container.current || map) return;
      observer.disconnect();
      map = new Map({
        container: container.current,
        style: "https://tiles.openfreemap.org/styles/positron",
        center: [-71.065, 42.36],
        zoom: 11.8,
        minZoom: 9,
        maxZoom: 16,
        attributionControl: false,
        scrollZoom: false,
        dragRotate: false,
        pitchWithRotate: false,
        touchPitch: false,
      });
      map.addControl(new NavigationControl({ showCompass: false }), "top-right");
      map.addControl(new AttributionControl({ compact: false }), "bottom-right");
      new Marker({ color: "#9C5A6A", scale: 0.8 }).setLngLat([-71.065, 42.36]).addTo(map);
      map.on("load", () => {
        if (!map) return;
        map.setPaintProperty("background", "background-color", "#F7F4F1");
        map.setPaintProperty("water", "fill-color", "#DEE4E3");
        map.setPaintProperty("waterway", "line-color", "#DEE4E3");
        map.setLayoutProperty("label_city", "text-offset", [
          "match",
          ["coalesce", ["get", "name_en"], ["get", "name"]],
          "Cambridge",
          ["literal", [2.5, -0.1]],
          ["literal", [0, -0.1]],
        ]);
        // Keep water as a plain shape without labels or decorative detail.
        for (const id of ["waterway_line_label", "water_name_point_label", "water_name_line_label", "airport"]) {
          map.setLayoutProperty(id, "visibility", "none");
        }
      });
    });
    observer.observe(container.current);
    return () => {
      observer.disconnect();
      map?.remove();
    };
  }, []);

  return <div ref={container} role="region" aria-label={label} className="boston-map h-full w-full" />;
}
