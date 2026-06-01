#!/bin/bash
LOGFILE="$(dirname "$0")/push-log.txt"
echo "=== START $(date) ===" > "$LOGFILE"
echo "=== Git remote ===" >> "$LOGFILE"
git remote -v >> "$LOGFILE" 2>&1
echo "=== Git status ===" >> "$LOGFILE"
git status >> "$LOGFILE" 2>&1
echo "=== Git log -3 ===" >> "$LOGFILE"
git log --oneline -3 >> "$LOGFILE" 2>&1
echo "=== Git push ===" >> "$LOGFILE"
git push 2>&1 | tee -a "$LOGFILE"
echo "=== END ===" >> "$LOGFILE"
echo ""
echo "Log saved to: $LOGFILE"
read -p "Press Enter to close..."
