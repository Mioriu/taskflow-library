# Team Collaboration Assignment Submission

## Repository Links
- Original repository: https://github.com/Mioriu/taskflow-library.git
- Fork repository: https://github.com/My-Prtc-Orgn/taskflow-library.git (fork)
- Feature PR: https://github.com/Mioriu/taskflow-library/pull/1
- Release tag: https://github.com/Mioriu/taskflow-library/releases/tag/v1.3.0

## Fork Workflow Evidence
```bash
# Show remotes configuration
$ git remote -v
origin	git@github.com:Mioriu/taskflow-library.git (fetch)
origin	git@github.com:Mioriu/taskflow-library.git (push)

# Show merged PR in history
$ git log --oneline --grep="priority"

46f493e Merge pull request #1 from My-Prtc-Orgn/feature/task-priority
c1a729d refactor: normalize priority string to lowercase
3dc67c1 test: add tests for task priority
6214c75 feat: add priority support to Task class

```

## Code Review Participation
1. PR I created: https://github.com/Mioriu/taskflow-library/pull/1
   - Review feedback received: В методе setPriority нет проверки на отрицательные числа или странные значения, только строгое соответствие списку.
 Но можно добавить приведение к нижнему регистру для удобства.
   - How I addressed it: refactor: normalize priority string to lowercase

2. PR I reviewed: https://github.com/Mioriu/taskflow-library/pull/2  
   - Comments I made:
"Consider adding a maximum limit for labels (e.g., 5 per task)"
"Missing tests for the addLabel method"
"Please update the API documentation"
   - Improvements suggested:
"Need to added autotests and update documentation"

## Release Management
1. Version bump: 1.2.0 → 1.3.0
2. Changelog updated: Yes
3. Tag created: v1.3.0
4. Semantic versioning followed: Yes (minor release for new features)

## Workflow Analysis
Current workflow: GitHub Flow
- Pros experienced:
Простота и понятность для всей команды

Быстрое создание и слияние веток

Pull Request упрощает код-ревью

Нет путаницы с множеством долгоживущих веток

- Cons experienced:

Нет поддержки нескольких окружений (staging, production)

Сложно управлять релизами с разными сроками готовности

Высокий риск сломать прод при частых деплоях

Неудобно для проектов с версионированием (semver)

- Recommended improvements:

Добавить теги для релизных коммитов

Автоматизировать деплой на staging перед слиянием в main

Использовать feature toggle для незавершённого кода

При необходимости перейти на GitHub Flow с релизными ветками или Git Flow

## Verification Commands
```bash
# Verify fork setup
git remote -v | grep upstream
upstream	git@github.com:Mioriu/taskflow-library.git (fetch)
upstream	git@github.com:Mioriu/taskflow-library.git (push)

# Verify tags
git tag -l "v1.3*"
v1.3.0

# Verify PR was merged
git log --grep="feat:" --oneline

6214c75 feat: add priority support to Task class

# Check release tag details
git show v1.3.0

tag v1.3.0
Tagger: Miory <matthew.gg.dk@gmail.com>
Date:   Fri Apr 17 23:07:11 2026 +0300

Release version 1.3.0
Features:
- Task priorities
- Task labels
- Improved validation

commit 41c72997bb4e4fbc72b8234e1195b32dc293fee1 (HEAD -> main, tag: v1.3.0, upstream/main)
Merge: b72a6bf c2ca672
Author: Mioriu <matthew.gg.dk@gmail.com>
Date:   Fri Apr 17 23:03:36 2026 +0300

    Merge pull request #3 from My-Prtc-Orgn/release/1.3.0
    
    release 1.3.0

```

## Self-Assessment Checklist
- [1] Successfully created and configured fork
- [1] Made meaningful contribution via PR
- [1] Participated in code review (both sides)
- [1] Followed project contribution guidelines
- [1] Created proper release with semantic versioning
- [1] Analyzed different workflow strategies
- [1] Documented all processes
