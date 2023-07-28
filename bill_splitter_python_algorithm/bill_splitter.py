def transactions_maker(list):
    total = sum(list)
    items = len(list)
    avg = total / items
    diff_list = [x - avg for x in sorted(list)]
    pos_count = sum(1 for x in diff_list if x >= 0)
    neg_count = len(diff_list) - pos_count

    transactions = []
    i, j = 0, len(diff_list) - 1

    while i < j:
        while diff_list[i] < 0:
            if -diff_list[i] > diff_list[j]:
                amount = round(diff_list[j], 2)
                diff_list[i] += diff_list[j]
                diff_list[j] = 0
                if amount > 0:
                    transactions.append((i, j, round(amount, 2)))
                j -= 1
            else:
                amount = round(-diff_list[i], 2)
                diff_list[j] += diff_list[i]
                diff_list[i] = 0
                if amount > 0:
                    transactions.append((i, j, round(amount, 2)))
        i += 1

    return transactions, len(transactions), (pos_count, neg_count), len(list)

    # for i in range(neg_count):
    #     while diff_list[i] < 0:
    #         if diff_list[-1] == 0:
    #             diff_list.pop()
    #         else:
    #             if -diff_list[i] > diff_list[-1]:
    #                 diff_list[i] += diff_list[-1]
    #                 amount = round(diff_list[-1], 2)

    #                 if amount > 0:
    #                   transactions.append((i, len(diff_list)-1, amount))

    #                 diff_list[-1] = 0
    #             else:
    #                 diff_list[-1] = diff_list[-1] + diff_list[i]
    #                 amount = round(-diff_list[i], 2)

    #                 if amount > 0:
    #                   transactions.append((i, len(diff_list)-1, amount))

    #                 diff_list[i] = 0
    # return transactions

lst = [71, 159, 142, 100, 69, 100, 12, 2]

print(transactions_maker(lst))