import React, { useEffect, useRef, useState } from 'react';
import Layout from '@theme/Layout';
import styles from './statistics.module.css';
// @ts-ignore
import WebStats from '../utils/WebStats-dist.js';

const COLUMN_TRANSLATIONS: Record<string, string> = {
  "Player": "Игрок",
  "Mine All Diamond": "Добыто алмазов",
  "Play Ticks": "Времени наиграно",
  "Sprint": "Пройдено блоков бегом",
  "Mine Ancient Debris": "Добыто древних обломков",
  "Jump": "Прыжков",
  "Deaths": "Смертей",
  "Time Since Last Death": "Времени с последней смерти",
};

export default function Statistics(): JSX.Element {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [hideOffline, setHideOffline] = useState(false);
  const [compact, setCompact] = useState(false);
  const [initError, setInitError] = useState<string | null>(null);

  useEffect(() => {
    setInitError(null);

    if (!tableContainerRef.current) return;

    let statsInstance: any = null;

    const initStats = () => {
      try {
        statsInstance = new WebStats({
          host: "http://localhost:8084",
          tableParent: tableContainerRef.current,
          updateInterval: 10000,
          showSkins: true,
          displayCount: 15,
        });

        if (statsInstance && typeof statsInstance.update === 'function') {
          const originalUpdate = statsInstance.update;
          statsInstance.update = function() {
            try {
              if (!this.data || !this.data.players) {
                return;
              }
              originalUpdate.call(this);
            } catch (err) {
              console.warn("WebStats update suppressed:", err);
            }
          };
        }

      } catch (err: any) {
        console.error("WebStats Init Error:", err);
        setInitError(`Не удалось загрузить модуль статистики: ${err.message}`);
      }
    };

    initStats();

    const observer = new MutationObserver((mutations) => {
      if (!tableContainerRef.current) return;
      
      const headers = tableContainerRef.current.querySelectorAll('th');
      headers.forEach(th => {
        const objective = th.getAttribute('data-objective'); 
        if (objective && COLUMN_TRANSLATIONS[objective]) {
           if (th.innerText !== COLUMN_TRANSLATIONS[objective]) {
             th.innerText = COLUMN_TRANSLATIONS[objective];
           }
        }
      });
    });

    if (tableContainerRef.current) {
      observer.observe(tableContainerRef.current, { 
        childList: true, 
        subtree: true 
      });
    }

    return () => {
      observer.disconnect();
      if (statsInstance && typeof statsInstance.stopUpdateInterval === 'function') {
        statsInstance.stopUpdateInterval();
      }
      if (tableContainerRef.current) {
        tableContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  useEffect(() => {
    if (compact) {
      document.documentElement.classList.add('compact');
      document.cookie = "compact=true; path=/";
    } else {
      document.documentElement.classList.remove('compact');
      document.cookie = "compact=false; path=/";
    }

    const offlineCheckbox = document.getElementById('hide-offline');
    if (offlineCheckbox) {
      const event = new Event('change', { bubbles: true });
      offlineCheckbox.dispatchEvent(event);
    }
    
    document.cookie = `hide-offline=${hideOffline}; path=/; max-age=315360000`;

  }, [compact, hideOffline]);


  return (
    <Layout
      title="Статистика"
      description="Статистика игроков сервера Minecraft">
      <main className="container margin-vert--lg">
        <h1>Статистика сервера</h1>
        
        <div className={styles.controls}>
          <label className={styles.optionLabel} htmlFor="hide-offline">
            <input 
              type="checkbox" 
              id="hide-offline" 
              className="webstats-option" 
              checked={hideOffline}
              onChange={(e) => setHideOffline(e.target.checked)}
            />
            <span>Скрывать оффлайн</span>
          </label>

          <label className={styles.optionLabel} htmlFor="compact">
            <input 
              type="checkbox" 
              id="compact" 
              className="webstats-option" 
              checked={compact}
              onChange={(e) => setCompact(e.target.checked)}
            />
            <span>Компактный вид</span>
          </label>
          
          <div className={`webstats-status ${styles.statusBlock}`}>
             {initError ? (
               <span className={styles.error}>{initError}</span>
             ) : (
               <>
                 <span className={`webstats-loading-indicator ${styles.loading}`}>
                    Загрузка данных...
                 </span>
                 <span className={`webstats-error-message ${styles.error}`}></span>
               </>
             )}
          </div>
        </div>

        <div className={styles.tableScrollWrapper}>
            <div 
              id="webstats-tables" 
              ref={tableContainerRef} 
              className={styles.tableContainer}
            ></div>
        </div>
        
      </main>
    </Layout>
  );
}