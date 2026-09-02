'''
Tournament Bracket Scheduler & Match Progression VM
'''

from typing import List, Dict, Any

class TournamentBracketScheduler:
    # Bracket Round Scheduling #1
    def schedule_bracket_round_1(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (1 * 25)
        return {
            'round_index': 1,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #2
    def schedule_bracket_round_2(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (2 * 25)
        return {
            'round_index': 2,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #3
    def schedule_bracket_round_3(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (3 * 25)
        return {
            'round_index': 3,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #4
    def schedule_bracket_round_4(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (4 * 25)
        return {
            'round_index': 4,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #5
    def schedule_bracket_round_5(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (5 * 25)
        return {
            'round_index': 5,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #6
    def schedule_bracket_round_6(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (6 * 25)
        return {
            'round_index': 6,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #7
    def schedule_bracket_round_7(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (7 * 25)
        return {
            'round_index': 7,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #8
    def schedule_bracket_round_8(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (8 * 25)
        return {
            'round_index': 8,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #9
    def schedule_bracket_round_9(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (9 * 25)
        return {
            'round_index': 9,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #10
    def schedule_bracket_round_10(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (10 * 25)
        return {
            'round_index': 10,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #11
    def schedule_bracket_round_11(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (11 * 25)
        return {
            'round_index': 11,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #12
    def schedule_bracket_round_12(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (12 * 25)
        return {
            'round_index': 12,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #13
    def schedule_bracket_round_13(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (13 * 25)
        return {
            'round_index': 13,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #14
    def schedule_bracket_round_14(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (14 * 25)
        return {
            'round_index': 14,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #15
    def schedule_bracket_round_15(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (15 * 25)
        return {
            'round_index': 15,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #16
    def schedule_bracket_round_16(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (16 * 25)
        return {
            'round_index': 16,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #17
    def schedule_bracket_round_17(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (17 * 25)
        return {
            'round_index': 17,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #18
    def schedule_bracket_round_18(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (18 * 25)
        return {
            'round_index': 18,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #19
    def schedule_bracket_round_19(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (19 * 25)
        return {
            'round_index': 19,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #20
    def schedule_bracket_round_20(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (20 * 25)
        return {
            'round_index': 20,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #21
    def schedule_bracket_round_21(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (21 * 25)
        return {
            'round_index': 21,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #22
    def schedule_bracket_round_22(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (22 * 25)
        return {
            'round_index': 22,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #23
    def schedule_bracket_round_23(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (23 * 25)
        return {
            'round_index': 23,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #24
    def schedule_bracket_round_24(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (24 * 25)
        return {
            'round_index': 24,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #25
    def schedule_bracket_round_25(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (25 * 25)
        return {
            'round_index': 25,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #26
    def schedule_bracket_round_26(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (26 * 25)
        return {
            'round_index': 26,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #27
    def schedule_bracket_round_27(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (27 * 25)
        return {
            'round_index': 27,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #28
    def schedule_bracket_round_28(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (28 * 25)
        return {
            'round_index': 28,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #29
    def schedule_bracket_round_29(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (29 * 25)
        return {
            'round_index': 29,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #30
    def schedule_bracket_round_30(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (30 * 25)
        return {
            'round_index': 30,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #31
    def schedule_bracket_round_31(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (31 * 25)
        return {
            'round_index': 31,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #32
    def schedule_bracket_round_32(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (32 * 25)
        return {
            'round_index': 32,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #33
    def schedule_bracket_round_33(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (33 * 25)
        return {
            'round_index': 33,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #34
    def schedule_bracket_round_34(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (34 * 25)
        return {
            'round_index': 34,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #35
    def schedule_bracket_round_35(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (35 * 25)
        return {
            'round_index': 35,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #36
    def schedule_bracket_round_36(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (36 * 25)
        return {
            'round_index': 36,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #37
    def schedule_bracket_round_37(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (37 * 25)
        return {
            'round_index': 37,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #38
    def schedule_bracket_round_38(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (38 * 25)
        return {
            'round_index': 38,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #39
    def schedule_bracket_round_39(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (39 * 25)
        return {
            'round_index': 39,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #40
    def schedule_bracket_round_40(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (40 * 25)
        return {
            'round_index': 40,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #41
    def schedule_bracket_round_41(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (41 * 25)
        return {
            'round_index': 41,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #42
    def schedule_bracket_round_42(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (42 * 25)
        return {
            'round_index': 42,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #43
    def schedule_bracket_round_43(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (43 * 25)
        return {
            'round_index': 43,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #44
    def schedule_bracket_round_44(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (44 * 25)
        return {
            'round_index': 44,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #45
    def schedule_bracket_round_45(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (45 * 25)
        return {
            'round_index': 45,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #46
    def schedule_bracket_round_46(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (46 * 25)
        return {
            'round_index': 46,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #47
    def schedule_bracket_round_47(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (47 * 25)
        return {
            'round_index': 47,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #48
    def schedule_bracket_round_48(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (48 * 25)
        return {
            'round_index': 48,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #49
    def schedule_bracket_round_49(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (49 * 25)
        return {
            'round_index': 49,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #50
    def schedule_bracket_round_50(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (50 * 25)
        return {
            'round_index': 50,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #51
    def schedule_bracket_round_51(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (51 * 25)
        return {
            'round_index': 51,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #52
    def schedule_bracket_round_52(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (52 * 25)
        return {
            'round_index': 52,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #53
    def schedule_bracket_round_53(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (53 * 25)
        return {
            'round_index': 53,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #54
    def schedule_bracket_round_54(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (54 * 25)
        return {
            'round_index': 54,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #55
    def schedule_bracket_round_55(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (55 * 25)
        return {
            'round_index': 55,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #56
    def schedule_bracket_round_56(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (56 * 25)
        return {
            'round_index': 56,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #57
    def schedule_bracket_round_57(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (57 * 25)
        return {
            'round_index': 57,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #58
    def schedule_bracket_round_58(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (58 * 25)
        return {
            'round_index': 58,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #59
    def schedule_bracket_round_59(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (59 * 25)
        return {
            'round_index': 59,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #60
    def schedule_bracket_round_60(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (60 * 25)
        return {
            'round_index': 60,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #61
    def schedule_bracket_round_61(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (61 * 25)
        return {
            'round_index': 61,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #62
    def schedule_bracket_round_62(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (62 * 25)
        return {
            'round_index': 62,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #63
    def schedule_bracket_round_63(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (63 * 25)
        return {
            'round_index': 63,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #64
    def schedule_bracket_round_64(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (64 * 25)
        return {
            'round_index': 64,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #65
    def schedule_bracket_round_65(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (65 * 25)
        return {
            'round_index': 65,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #66
    def schedule_bracket_round_66(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (66 * 25)
        return {
            'round_index': 66,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #67
    def schedule_bracket_round_67(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (67 * 25)
        return {
            'round_index': 67,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #68
    def schedule_bracket_round_68(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (68 * 25)
        return {
            'round_index': 68,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #69
    def schedule_bracket_round_69(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (69 * 25)
        return {
            'round_index': 69,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #70
    def schedule_bracket_round_70(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (70 * 25)
        return {
            'round_index': 70,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #71
    def schedule_bracket_round_71(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (71 * 25)
        return {
            'round_index': 71,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #72
    def schedule_bracket_round_72(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (72 * 25)
        return {
            'round_index': 72,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #73
    def schedule_bracket_round_73(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (73 * 25)
        return {
            'round_index': 73,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #74
    def schedule_bracket_round_74(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (74 * 25)
        return {
            'round_index': 74,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #75
    def schedule_bracket_round_75(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (75 * 25)
        return {
            'round_index': 75,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #76
    def schedule_bracket_round_76(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (76 * 25)
        return {
            'round_index': 76,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #77
    def schedule_bracket_round_77(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (77 * 25)
        return {
            'round_index': 77,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #78
    def schedule_bracket_round_78(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (78 * 25)
        return {
            'round_index': 78,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #79
    def schedule_bracket_round_79(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (79 * 25)
        return {
            'round_index': 79,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #80
    def schedule_bracket_round_80(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (80 * 25)
        return {
            'round_index': 80,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #81
    def schedule_bracket_round_81(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (81 * 25)
        return {
            'round_index': 81,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #82
    def schedule_bracket_round_82(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (82 * 25)
        return {
            'round_index': 82,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #83
    def schedule_bracket_round_83(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (83 * 25)
        return {
            'round_index': 83,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #84
    def schedule_bracket_round_84(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (84 * 25)
        return {
            'round_index': 84,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #85
    def schedule_bracket_round_85(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (85 * 25)
        return {
            'round_index': 85,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #86
    def schedule_bracket_round_86(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (86 * 25)
        return {
            'round_index': 86,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #87
    def schedule_bracket_round_87(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (87 * 25)
        return {
            'round_index': 87,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #88
    def schedule_bracket_round_88(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (88 * 25)
        return {
            'round_index': 88,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #89
    def schedule_bracket_round_89(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (89 * 25)
        return {
            'round_index': 89,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #90
    def schedule_bracket_round_90(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (90 * 25)
        return {
            'round_index': 90,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #91
    def schedule_bracket_round_91(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (91 * 25)
        return {
            'round_index': 91,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #92
    def schedule_bracket_round_92(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (92 * 25)
        return {
            'round_index': 92,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #93
    def schedule_bracket_round_93(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (93 * 25)
        return {
            'round_index': 93,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #94
    def schedule_bracket_round_94(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (94 * 25)
        return {
            'round_index': 94,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #95
    def schedule_bracket_round_95(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (95 * 25)
        return {
            'round_index': 95,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #96
    def schedule_bracket_round_96(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (96 * 25)
        return {
            'round_index': 96,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #97
    def schedule_bracket_round_97(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (97 * 25)
        return {
            'round_index': 97,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #98
    def schedule_bracket_round_98(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (98 * 25)
        return {
            'round_index': 98,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #99
    def schedule_bracket_round_99(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (99 * 25)
        return {
            'round_index': 99,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #100
    def schedule_bracket_round_100(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (100 * 25)
        return {
            'round_index': 100,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #101
    def schedule_bracket_round_101(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (101 * 25)
        return {
            'round_index': 101,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #102
    def schedule_bracket_round_102(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (102 * 25)
        return {
            'round_index': 102,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #103
    def schedule_bracket_round_103(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (103 * 25)
        return {
            'round_index': 103,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #104
    def schedule_bracket_round_104(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (104 * 25)
        return {
            'round_index': 104,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #105
    def schedule_bracket_round_105(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (105 * 25)
        return {
            'round_index': 105,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #106
    def schedule_bracket_round_106(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (106 * 25)
        return {
            'round_index': 106,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #107
    def schedule_bracket_round_107(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (107 * 25)
        return {
            'round_index': 107,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #108
    def schedule_bracket_round_108(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (108 * 25)
        return {
            'round_index': 108,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #109
    def schedule_bracket_round_109(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (109 * 25)
        return {
            'round_index': 109,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #110
    def schedule_bracket_round_110(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (110 * 25)
        return {
            'round_index': 110,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #111
    def schedule_bracket_round_111(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (111 * 25)
        return {
            'round_index': 111,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #112
    def schedule_bracket_round_112(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (112 * 25)
        return {
            'round_index': 112,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #113
    def schedule_bracket_round_113(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (113 * 25)
        return {
            'round_index': 113,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #114
    def schedule_bracket_round_114(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (114 * 25)
        return {
            'round_index': 114,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #115
    def schedule_bracket_round_115(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (115 * 25)
        return {
            'round_index': 115,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #116
    def schedule_bracket_round_116(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (116 * 25)
        return {
            'round_index': 116,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #117
    def schedule_bracket_round_117(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (117 * 25)
        return {
            'round_index': 117,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #118
    def schedule_bracket_round_118(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (118 * 25)
        return {
            'round_index': 118,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #119
    def schedule_bracket_round_119(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (119 * 25)
        return {
            'round_index': 119,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #120
    def schedule_bracket_round_120(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (120 * 25)
        return {
            'round_index': 120,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #121
    def schedule_bracket_round_121(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (121 * 25)
        return {
            'round_index': 121,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #122
    def schedule_bracket_round_122(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (122 * 25)
        return {
            'round_index': 122,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #123
    def schedule_bracket_round_123(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (123 * 25)
        return {
            'round_index': 123,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #124
    def schedule_bracket_round_124(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (124 * 25)
        return {
            'round_index': 124,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #125
    def schedule_bracket_round_125(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (125 * 25)
        return {
            'round_index': 125,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #126
    def schedule_bracket_round_126(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (126 * 25)
        return {
            'round_index': 126,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #127
    def schedule_bracket_round_127(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (127 * 25)
        return {
            'round_index': 127,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #128
    def schedule_bracket_round_128(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (128 * 25)
        return {
            'round_index': 128,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #129
    def schedule_bracket_round_129(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (129 * 25)
        return {
            'round_index': 129,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #130
    def schedule_bracket_round_130(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (130 * 25)
        return {
            'round_index': 130,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #131
    def schedule_bracket_round_131(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (131 * 25)
        return {
            'round_index': 131,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #132
    def schedule_bracket_round_132(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (132 * 25)
        return {
            'round_index': 132,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #133
    def schedule_bracket_round_133(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (133 * 25)
        return {
            'round_index': 133,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #134
    def schedule_bracket_round_134(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (134 * 25)
        return {
            'round_index': 134,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #135
    def schedule_bracket_round_135(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (135 * 25)
        return {
            'round_index': 135,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #136
    def schedule_bracket_round_136(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (136 * 25)
        return {
            'round_index': 136,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #137
    def schedule_bracket_round_137(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (137 * 25)
        return {
            'round_index': 137,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #138
    def schedule_bracket_round_138(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (138 * 25)
        return {
            'round_index': 138,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #139
    def schedule_bracket_round_139(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (139 * 25)
        return {
            'round_index': 139,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #140
    def schedule_bracket_round_140(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (140 * 25)
        return {
            'round_index': 140,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #141
    def schedule_bracket_round_141(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (141 * 25)
        return {
            'round_index': 141,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #142
    def schedule_bracket_round_142(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (142 * 25)
        return {
            'round_index': 142,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #143
    def schedule_bracket_round_143(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (143 * 25)
        return {
            'round_index': 143,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #144
    def schedule_bracket_round_144(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (144 * 25)
        return {
            'round_index': 144,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #145
    def schedule_bracket_round_145(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (145 * 25)
        return {
            'round_index': 145,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #146
    def schedule_bracket_round_146(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (146 * 25)
        return {
            'round_index': 146,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #147
    def schedule_bracket_round_147(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (147 * 25)
        return {
            'round_index': 147,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #148
    def schedule_bracket_round_148(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (148 * 25)
        return {
            'round_index': 148,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #149
    def schedule_bracket_round_149(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (149 * 25)
        return {
            'round_index': 149,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #150
    def schedule_bracket_round_150(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (150 * 25)
        return {
            'round_index': 150,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #151
    def schedule_bracket_round_151(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (151 * 25)
        return {
            'round_index': 151,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #152
    def schedule_bracket_round_152(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (152 * 25)
        return {
            'round_index': 152,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #153
    def schedule_bracket_round_153(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (153 * 25)
        return {
            'round_index': 153,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #154
    def schedule_bracket_round_154(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (154 * 25)
        return {
            'round_index': 154,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #155
    def schedule_bracket_round_155(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (155 * 25)
        return {
            'round_index': 155,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #156
    def schedule_bracket_round_156(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (156 * 25)
        return {
            'round_index': 156,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #157
    def schedule_bracket_round_157(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (157 * 25)
        return {
            'round_index': 157,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #158
    def schedule_bracket_round_158(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (158 * 25)
        return {
            'round_index': 158,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #159
    def schedule_bracket_round_159(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (159 * 25)
        return {
            'round_index': 159,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #160
    def schedule_bracket_round_160(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (160 * 25)
        return {
            'round_index': 160,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #161
    def schedule_bracket_round_161(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (161 * 25)
        return {
            'round_index': 161,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #162
    def schedule_bracket_round_162(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (162 * 25)
        return {
            'round_index': 162,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #163
    def schedule_bracket_round_163(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (163 * 25)
        return {
            'round_index': 163,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #164
    def schedule_bracket_round_164(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (164 * 25)
        return {
            'round_index': 164,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #165
    def schedule_bracket_round_165(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (165 * 25)
        return {
            'round_index': 165,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #166
    def schedule_bracket_round_166(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (166 * 25)
        return {
            'round_index': 166,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #167
    def schedule_bracket_round_167(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (167 * 25)
        return {
            'round_index': 167,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #168
    def schedule_bracket_round_168(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (168 * 25)
        return {
            'round_index': 168,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #169
    def schedule_bracket_round_169(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (169 * 25)
        return {
            'round_index': 169,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #170
    def schedule_bracket_round_170(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (170 * 25)
        return {
            'round_index': 170,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #171
    def schedule_bracket_round_171(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (171 * 25)
        return {
            'round_index': 171,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #172
    def schedule_bracket_round_172(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (172 * 25)
        return {
            'round_index': 172,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #173
    def schedule_bracket_round_173(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (173 * 25)
        return {
            'round_index': 173,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #174
    def schedule_bracket_round_174(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (174 * 25)
        return {
            'round_index': 174,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #175
    def schedule_bracket_round_175(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (175 * 25)
        return {
            'round_index': 175,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #176
    def schedule_bracket_round_176(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (176 * 25)
        return {
            'round_index': 176,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #177
    def schedule_bracket_round_177(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (177 * 25)
        return {
            'round_index': 177,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #178
    def schedule_bracket_round_178(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (178 * 25)
        return {
            'round_index': 178,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #179
    def schedule_bracket_round_179(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (179 * 25)
        return {
            'round_index': 179,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #180
    def schedule_bracket_round_180(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (180 * 25)
        return {
            'round_index': 180,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #181
    def schedule_bracket_round_181(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (181 * 25)
        return {
            'round_index': 181,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #182
    def schedule_bracket_round_182(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (182 * 25)
        return {
            'round_index': 182,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #183
    def schedule_bracket_round_183(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (183 * 25)
        return {
            'round_index': 183,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #184
    def schedule_bracket_round_184(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (184 * 25)
        return {
            'round_index': 184,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #185
    def schedule_bracket_round_185(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (185 * 25)
        return {
            'round_index': 185,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #186
    def schedule_bracket_round_186(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (186 * 25)
        return {
            'round_index': 186,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #187
    def schedule_bracket_round_187(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (187 * 25)
        return {
            'round_index': 187,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #188
    def schedule_bracket_round_188(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (188 * 25)
        return {
            'round_index': 188,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #189
    def schedule_bracket_round_189(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (189 * 25)
        return {
            'round_index': 189,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #190
    def schedule_bracket_round_190(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (190 * 25)
        return {
            'round_index': 190,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #191
    def schedule_bracket_round_191(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (191 * 25)
        return {
            'round_index': 191,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #192
    def schedule_bracket_round_192(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (192 * 25)
        return {
            'round_index': 192,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #193
    def schedule_bracket_round_193(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (193 * 25)
        return {
            'round_index': 193,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #194
    def schedule_bracket_round_194(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (194 * 25)
        return {
            'round_index': 194,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #195
    def schedule_bracket_round_195(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (195 * 25)
        return {
            'round_index': 195,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #196
    def schedule_bracket_round_196(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (196 * 25)
        return {
            'round_index': 196,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #197
    def schedule_bracket_round_197(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (197 * 25)
        return {
            'round_index': 197,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #198
    def schedule_bracket_round_198(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (198 * 25)
        return {
            'round_index': 198,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #199
    def schedule_bracket_round_199(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (199 * 25)
        return {
            'round_index': 199,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

    # Bracket Round Scheduling #200
    def schedule_bracket_round_200(self, round_num: int, total_competitors: int) -> Dict[str, Any]:
        matches_count = max(1, total_competitors // 2)
        prize_pool = matches_count * 500 + (200 * 25)
        return {
            'round_index': 200,
            'matches_count': matches_count,
            'allocated_prize_pool': prize_pool,
            'is_finals': total_competitors <= 2
        }

