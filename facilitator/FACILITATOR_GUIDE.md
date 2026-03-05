# Facilitator Guide & Workshop Timeline

## Overview

This workshop runs **Saturday, March 8-9, 2026** from **12pm-8pm ET** both days.

**Participants:** 66 blind and low-vision students  
**Format:** Hybrid (streaming + learning room)  
**Main Goal:** Get every student to merge their first pull request

---

## Before the Workshop (Friday, March 7)

### Facilitator Checklist

- [ ] Verify all 66 student branches exist
- [ ] Test assignment issues load without errors
- [ ] Confirm peers are assigned for cross-review
- [ ] Test bot validation workflow on practice PR
- [ ] Share link to [Zoom registration](https://us06web.zoom.us/meeting/register/YdAAvwzAQUCYpPpNtAlG3g)
- [ ] Send reminder email with:
  - Zoom link + audio-only option
  - Pre-workshop setup reminder
  - FAQ: "What if I get stuck?"
  - Office hours/emergency contact info

### Verify Infrastructure

```bash
# Check all branches exist
git branch | Select-String "student/" | Measure-Object

# Verify roster is updated
python -c "import json; print(f\"Total students: {len(json.load(open('.github/data/student-roster.json'))['students'])}\")"

# Test one assignment issue creation (run on practice student)
gh issue create --title "[TEST] Sample Assignment" --body "Test issue" --assignee $YOUR_USERNAME
```

---

## Day 1: Saturday, March 8, 12pm-8pm ET

### 12:00 PM - 1:00 PM: Welcome & GitHub Orientation (60 min)

**Facilitator Role:**
- Create welcoming opening acknowledging everyone's accessibility needs
- Explain why GitHub matters for blind/low-vision inclusion
- Demonstrate: "I'm going to open the repo right now and you'll follow along"
- Q&A in chat - answer every question

**What Students Do:**
- Join Zoom with screen reader
- Open GitHub in their browser
- Navigate to `/learning-room/` folder
- Confirm they can see their assignment issue

**Resources to Have Ready:**
- Screen reader cheatsheet (Appendix B)
- Common GitHub.com keyboard shortcuts printed
- Zoom chat moderator who watches for questions

**Success Metric:** All 66 students in Zoom report "I found my issue"

---

### 1:00 PM - 1:30 PM: Demo - Your First PR (30 min)

**You (facilitator) will:**
1. Show a completed example on screen with narration
2. Walk through EVERY step:
   - "First, I click the edit pencil"
   - "I see the markdown editor open"
   - "I make my change here"
   - "I scroll down and create a new branch: `fix/demo-001`"
   - "Now I click 'Propose changes' button"
   - "GitHub shows me the PR preview - notice the bot already right here checking my work"
   - "I fill in the PR template fields"
   - "I click 'Create Pull Request'"
   - "The bot comments within 30 seconds with feedback"
   - "I address the feedback and push an update commit"
   - "I request review by typing @peer_username"
   - "My peer reviews and I get approval"
   - "I click merge button"
   - **✨ Done! My PR is merged!**

**This is the workflow EVERY student will repeat.** Make it crystal clear.

**Success Metric:** Students report "I see how this works" in chat

---

### 1:30 PM - 6:00 PM: Silent Working Session (270 min)

**Students work independently on their assignment issues.**

This is THE MAIN ENGAGEMENT. They're making their first real contribution.

**Facilitator Role:**
- Monitor Discussions and PR comments for questions
- Respond quickly to blockers
- Celebrate each merged PR in chat
- Track progress in [progress tracker](./progress-tracker.json)

**Expected Cadence:**
- **1:30-2:30 PM** - Students opening issues, starting edits (expect 15-20 PRs)
- **2:30-3:30 PM** - Bot feedback flowing, students making fixes (25-30 PRs)
- **3:30-5:00 PM** - Reviews happening, merges happening (30-35 PRs)
- **5:00-6:00 PM** - Stragglers finishing, peer reviews catching up

**Facilitator Interventions:**

If student hasn't opened a PR by 2:30 PM:
- Message them: "Hey @student! Need help? Here's the link to your issue: [issue #XX]"
- Keep it low-pressure - some will take longer

If bot gives critical feedback:
- Explain in Discussions what the bot meant
- Show the fix clearly
- Make sure student isn't discouraged

If a peer review isn't happening:
- Offer to do a facilitator review instead
- Or ask another student: "Can you review this PR?"
- Priority is getting to merge, not strict peer review

**Celebrate Merges:**
```
🎉 Huge congrats @username! Your first PR is MERGED! 
You're officially a contributor to an open source project!
```

---

### 6:00 PM - 6:30 PM: Q&A & Reflection (30 min)

**Prompt for Discussion:**

> "Tell us in chat: What was one thing you learned today about GitHub?"

**Be ready to:**
- Answer "I got an error..." questions
- Help troubleshoot remaining issues
- Give credit to peer reviewers
- Mark students who didn't finish but are close as "follow-up needed"

**Send them home with:**
- Tomorrow's agenda
- Sneak peek at what's next
- Encouragement!

---

### 6:30 PM - 8:00 PM: Office Hours (Optional)

- Available for 1:1 troubleshooting
- Help students finish PRs
- Answer "How do I...?" questions about GitHub
- Document common questions for tomorrow's content

---

## Day 2: Sunday, March 9, 12pm-8pm ET

### 12:00 PM - 12:30 PM: Recap & Wins (30 min)

**Facilitator:**
- Show stats: "66 students, X PRs merged on Day 1"
- Acknowledge students who got stuck but persisted
- Introduce next challenge level for students ready to go further

---

### 12:30 PM - 1:30 PM: Deep Dive - Code Review (60 min)

**Teach:**
- How to review someone else's PR  
- What good feedback looks like
- How to incorporate feedback gracefully
- Real-world code review practices

**Paired Activity:**
- Have students review each other's Day 1 PRs
- Start with example feedback you provide
- Let them practice the async review process

---

### 1:30 PM - 6:00 PM: Skill-Building Challenges (270 min)

**Now students work on progressively harder challenges:**

| Skill Level | Students | Challenges | Topics |
|------------|----------|-----------|--------|
| Beginner (joined yesterday) | ~40 | Challenge 2-3 | Content writing, link validation |
| Intermediate (feeling confident) | ~20 | Branch: `day2-practice` | Comparing diffs, merge conflicts |
| Advanced (want more) | ~6 | Custom projects | Taking on real issues |

**Bot Enhances:**
- Accessibility feedback becomes more detailed
- Highlights larger patterns ("You capitalized but others use lowercase")
- Suggests improvements not just fixes

**Facilitator Role:**
- Track who's moving between skill levels
- Give stretch challenges to advanced students
- Help intermediate students with conflict resolution
- Keep the energy positive

---

### 6:00 PM - 7:00 PM: Final Q&A & Celebration (60 min)

**Metrics to share:**
```
🎯 WORKSHOP RESULTS:
- 66 students registered
- X PRs merged (track real number)
- X students got 2+ merges
- X students completed code review cycle
- 100% accessibility - screen readers worked flawlessly

📊 Impact:
- X open source contributions submitted
- X participants added to 66 projects' contributor lists
- X% of students felt encouraged to contribute again
```

**Next Steps:**
- Point them to contributing.md in their favorite open source projects
- Share list of "good first issue" finding techniques
- Give them the RESOURCES appendix
- Offer alumni community channel

### 7:00 PM - 8:00 PM: Informal Hangout (60 min)

- Students "hang out" on Zoom
- Chat with peers and facilitators
- Ask follow-up questions
- Exchange GitHub usernames

---

## Facilitator Role Critical Points

### Communication Style

✅ **DO:**
- Use simple language: "Click the pencil icon to edit"
- Narrate exactly what you're doing: "I'm clicking... now I'm typing..."
- Normalize mistakes: "Oops I forgot something - let me fix it"
- Celebrate effort not just success: "Nice work thinking through that!"
- Answer the same question multiple times patiently

❌ **DON'T:**
- Use "obviously" or assume prior knowledge
- Assume everyone is on the same screen area
- Rush through demos
- Make anyone feel bad about getting stuck
- Focus on speed - focus on understanding

### Responding to Common Issues

| Student Says | Your Response |
|-------------|--------------|
| "I can't see my assignment issue" | Have them go to Issues tab, filter by Assignee > Me, or give direct link |
| "The bot is confusing me" | Ask what part confused them, then explain in plain language |
| "I don't know what [jargon] means" | Explain, then add it to glossary so next student finds it |
| "I accidentally merged the wrong thing" | No big deal - revert commit, explain it, move on |
| "My screen reader stops at the file picker" | Have them use keyboard: Tab to button, Space to open, Type filename |
| "I'm done - what's next?" | Option 1: Do another challenge. Option 2: Review someone's PR. Option 3: Help a peer. |

### End of Workshop Facilitator Duties

1. **Export metrics** - Use progress tracker to generate final report
2. **Write thank you email** - Personal note to each student (use template)
3. **Create alumni channel** - Slack/Discord for ongoing support
4. **Document what worked** - Feedback for next workshop
5. **Tag students in commit credit** - Add to CONTRIBUTORS file

---

## Emergency Protocols

### Bot stops responding to PRs
- Check GitHub Actions status page
- Manually review PRs and comment with feedback format bot would use
- Post in Discussions: "Facing technical issue, we'll handle this manually"

### Student GitHub account locked
- Have them reset password via GitHub
- Or create temporary escalation issue for them to move forward

### Zoom connectivity issues
- Have phone dial-in number as backup
- Offer to continue in Discussions if needed
- Record session for students who lose connection

### Workshop needs to end early
- Stop at natural break point
- Students can continue async after
- No one forced offline mid-PR

